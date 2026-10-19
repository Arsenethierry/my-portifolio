import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon, MenuIcon } from './icons';
import ResumeLink from './resume-link';

const navlinks = [
    { title: 'Skills', id: 'skills' },
    { title: 'Work', id: 'work' },
    { title: 'Experience', id: 'experience' },
    { title: 'Contact', id: 'contact' },
];

/** Tracks which section heading is in view, for the active nav state. */
function useActiveSection() {
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) return;
        const sections = navlinks
            .map((l) => document.getElementById(l.id)?.closest('section'))
            .filter((s): s is HTMLElement => Boolean(s));
        const visible = new Set<string>();
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.querySelector('h2[id]')?.id;
                    if (!id) return;
                    if (entry.isIntersecting) visible.add(id);
                    else visible.delete(id);
                });
                // Clears the highlight in the hero, where no tracked section is centred
                setActive(navlinks.find((l) => visible.has(l.id))?.id ?? null);
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return active;
}

const Navbar = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const progress = useRef<HTMLDivElement>(null);
    const active = useActiveSection();

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = max > 0 ? window.scrollY / max : 0;
            progress.current?.style.setProperty('transform', `scaleX(${ratio})`);
            setScrolled(window.scrollY > 24);
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-pink focus:px-3 focus:py-2 focus:text-ink"
            >
                Skip to content
            </a>
            <div
                className={`mx-auto max-w-content overflow-hidden rounded-2xl border transition-all duration-500 ${
                    scrolled || open
                        ? 'border-line/80 bg-ink/75 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl'
                        : 'border-transparent bg-transparent'
                }`}
            >
                <nav aria-label="Primary" className="flex h-14 items-center justify-between px-3 sm:px-4">
                    <Link href="/">
                        <a className="group flex items-center gap-3 font-semibold text-white" aria-label="Arsene Thierry — home">
                            <span
                                aria-hidden="true"
                                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink to-violet font-mono text-sm font-bold text-ink transition-transform duration-300 group-hover:rotate-6"
                            >
                                AT
                            </span>
                            <span className="text-sm tracking-tight">Arsene Thierry</span>
                        </a>
                    </Link>

                    <ul className="hidden items-center gap-1 md:flex">
                        {navlinks.map((item) => {
                            const isActive = active === item.id;
                            return (
                                <li key={item.id}>
                                    <Link href={`/#${item.id}`}>
                                        <a
                                            aria-current={isActive ? 'true' : undefined}
                                            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                                isActive ? 'bg-surface text-white' : 'text-body hover:text-white'
                                            }`}
                                        >
                                            {item.title}
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="ml-2">
                            <ResumeLink className="btn-primary px-5 py-2" label="Résumé" />
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="rounded-lg p-2 text-white md:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                    </button>
                </nav>

                <div id="mobile-nav" hidden={!open} className="border-t border-line md:hidden">
                    <ul className="flex flex-col p-3">
                        {navlinks.map((item) => (
                            <li key={item.id}>
                                <Link href={`/#${item.id}`}>
                                    <a
                                        className="block rounded-lg px-3 py-3 text-base font-medium text-body hover:bg-surface hover:text-white"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <ResumeLink className="btn-primary w-full" />
                        </li>
                    </ul>
                </div>

                <div
                    ref={progress}
                    aria-hidden="true"
                    className={`h-0.5 origin-left bg-gradient-to-r from-pink via-violet to-sky-300 transition-opacity duration-500 ${
                        scrolled ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transform: 'scaleX(0)' }}
                />
            </div>
        </header>
    );
};

export default Navbar;
