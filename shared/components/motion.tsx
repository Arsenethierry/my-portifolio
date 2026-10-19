import React, { useEffect, useRef } from 'react';

/* One IntersectionObserver shared by every Reveal on the page. */
let observer: IntersectionObserver | null = null;

function getObserver() {
    if (observer || typeof window === 'undefined' || !('IntersectionObserver' in window)) return observer;
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer?.unobserve(entry.target);
                }
            });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    return observer;
}

type RevealProps = {
    as?: keyof JSX.IntrinsicElements;
    delay?: number;
    variant?: 'up' | 'left' | 'scale';
    className?: string;
    children: React.ReactNode;
} & Record<string, unknown>;

/** Fades content in when it enters the viewport. Visible by default without JS. */
export function Reveal({ as = 'div', delay = 0, variant = 'up', className, children, ...rest }: RevealProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        const io = getObserver();
        if (!el) return;
        if (!io) {
            el.classList.add('is-visible');
            return;
        }
        io.observe(el);
        return () => io.unobserve(el);
    }, []);

    const Tag = as as React.ElementType;
    return (
        <Tag
            ref={ref}
            data-reveal={variant === 'up' ? '' : variant}
            className={className}
            style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
            {...rest}
        >
            {children}
        </Tag>
    );
}

type SpotlightProps = React.HTMLAttributes<HTMLDivElement> & { as?: keyof JSX.IntrinsicElements };

/** Card whose glow follows the pointer (see `.spotlight` in globals.css). */
export function SpotlightCard({ as = 'div', className = '', children, ...rest }: SpotlightProps) {
    const onMove = (e: React.PointerEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
    };
    const Tag = as as React.ElementType;
    return (
        <Tag onPointerMove={onMove} className={`spotlight ${className}`} {...rest}>
            {children}
        </Tag>
    );
}

/** Subtle 3D tilt for showcase media; disabled for reduced motion and touch. */
export function Tilt({ className = '', children }: { className?: string; children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el || e.pointerType !== 'mouse') return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1400px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg)`;
    };
    const reset = () => {
        if (ref.current) ref.current.style.transform = '';
    };

    return (
        <div
            ref={ref}
            onPointerMove={onMove}
            onPointerLeave={reset}
            className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
        >
            {children}
        </div>
    );
}
