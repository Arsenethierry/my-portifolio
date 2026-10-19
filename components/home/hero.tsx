import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { career, profile } from '../../shared/data/profile';
import { ArrowDown } from '../../shared/components/icons';
import ResumeLink from '../../shared/components/resume-link';

const focusAreas = [
    'full-stack products',
    'REST APIs & integrations',
    'Docker & CI/CD deployments',
    'secure authentication',
    'production infrastructure',
];

const facts = [
    { value: 'CTO', label: 'Oodser · Praeta Consult' },
    { value: '2022', label: 'Building software since' },
    { value: 'MSc', label: 'Software Engineering, in progress' },
];

function RotatingFocus() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const id = window.setInterval(() => setIndex((i) => (i + 1) % focusAreas.length), 2600);
        return () => window.clearInterval(id);
    }, []);

    return (
        <span className="relative inline-grid align-bottom">
            {/* Screen readers get the full list once instead of a changing word */}
            <span className="sr-only">{focusAreas.join(', ')}</span>
            {focusAreas.map((area, i) => (
                <span
                    key={area}
                    aria-hidden="true"
                    className={`col-start-1 row-start-1 whitespace-nowrap bg-gradient-to-r from-pink to-violet bg-clip-text text-transparent transition-all duration-500 ease-out ${
                        i === index ? 'translate-y-0 opacity-100 blur-0' : i === (index + focusAreas.length - 1) % focusAreas.length ? '-translate-y-4 opacity-0 blur-sm' : 'translate-y-4 opacity-0 blur-sm'
                    }`}
                >
                    {area}
                </span>
            ))}
        </span>
    );
}

function Hero() {
    const [oodser, praeta] = career[0].roles;

    const onMove = (e: React.PointerEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--hx', `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty('--hy', `${e.clientY - r.top}px`);
    };

    return (
        <section
            aria-labelledby="hero-title"
            onPointerMove={onMove}
            className="relative isolate overflow-hidden"
            style={{ '--hx': '70%', '--hy': '30%' } as React.CSSProperties}
        >
            {/* Background: grid, aurora light, cursor glow — all decorative */}
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink">
                <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
                <div className="aurora -left-40 -top-40 h-[34rem] w-[34rem] bg-pink/20" />
                <div className="aurora right-[-10rem] top-10 h-[38rem] w-[38rem] bg-violet/20 [animation-delay:-6s]" />
                <div className="aurora bottom-[-16rem] left-1/3 h-[30rem] w-[30rem] bg-sky-400/10 [animation-delay:-12s]" />
                <div className="absolute inset-0 opacity-70 [background:radial-gradient(500px_circle_at_var(--hx)_var(--hy),rgba(184,193,236,0.10),transparent_60%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
            </div>

            <div className="container-page grid items-center gap-16 pb-24 pt-28 sm:pt-32 lg:min-h-[min(100vh,62rem)] lg:grid-cols-12 lg:gap-10 lg:pb-28">
                <div className="lg:col-span-7">
                    <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-body backdrop-blur">
                        <span className="pulse-dot relative h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                        Open to engineering roles & consulting
                    </p>

                    <h1 id="hero-title" className="mt-7 animate-rise text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white [animation-delay:80ms] min-[400px]:text-5xl sm:text-6xl xl:text-7xl">
                        Arsene Thierry
                        <span className="text-gradient block pb-2">Komezudufashe</span>
                    </h1>

                    <p className="mt-6 animate-rise text-xl font-medium text-white [animation-delay:160ms] sm:text-2xl">
                        Software engineer & CTO. I build and run <RotatingFocus />
                    </p>

                    <p className="mt-5 max-w-2xl animate-rise text-base leading-relaxed text-body [animation-delay:240ms] sm:text-lg">
                        {profile.summary}
                    </p>

                    <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:320ms] sm:flex-row sm:flex-wrap sm:items-center">
                        <Link href="/#work">
                            <a className="btn-primary group">
                                Explore my work
                                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                            </a>
                        </Link>
                        <ResumeLink />
                        <Link href="/#contact">
                            <a className="btn-ghost">Contact me →</a>
                        </Link>
                    </div>

                    <dl className="mt-12 grid max-w-xl animate-rise grid-cols-3 divide-x divide-line border-y border-line [animation-delay:400ms]">
                        {facts.map((f) => (
                            <div key={f.value} className="px-3 py-4 first:pl-0 sm:px-5">
                                <dt className="sr-only">{f.label}</dt>
                                <dd>
                                    <span className="block text-2xl font-semibold text-white sm:text-3xl">{f.value}</span>
                                    <span className="mt-1 block text-xs leading-snug text-muted">{f.label}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Portrait with rotating gradient ring and floating credentials */}
                <div className="relative mx-auto w-full max-w-[22rem] animate-rise [animation-delay:200ms] sm:max-w-sm lg:col-span-5 lg:max-w-md">
                    <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-pink/30 via-violet/20 to-sky-400/20 blur-3xl" />
                    <div className="relative overflow-hidden rounded-[2.25rem] p-[3px] shadow-[0_40px_120px_-40px_rgba(184,193,236,0.45)]">
                        <div aria-hidden="true" className="portrait-ring absolute inset-[-60%]" />
                        <div className="relative overflow-hidden rounded-[calc(2.25rem-3px)] bg-surface">
                            <Image
                                src={profile.portrait.src}
                                alt={profile.portrait.alt}
                                width={960}
                                height={1039}
                                layout="responsive"
                                sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 352px"
                                priority
                            />
                            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 to-transparent" />
                            <p className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-ink/60 px-3 py-1.5 text-xs text-white backdrop-blur">
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-pink" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                                {profile.location}
                                <span className="font-mono text-muted">{profile.timezone}</span>
                            </p>
                        </div>
                    </div>

                    <div aria-hidden="true" className="float absolute -left-6 top-10 hidden rounded-xl border border-line bg-surface/85 px-3 py-2 font-mono text-xs text-violet shadow-xl backdrop-blur sm:block lg:-left-12">
                        <span className="text-pink">{'<'}</span>Next.js · NestJS<span className="text-pink">{' />'}</span>
                    </div>
                    <div aria-hidden="true" className="float absolute -right-4 top-1/3 hidden rounded-xl border border-line bg-surface/85 px-3 py-2 font-mono text-xs text-violet shadow-xl backdrop-blur [animation-delay:-2s] sm:block lg:-right-10">
                        CI/CD <span className="text-pink">→</span> Docker <span className="text-pink">→</span> VPS
                    </div>
                    <div className="absolute -bottom-8 left-1/2 w-[88%] -translate-x-1/2 sm:-left-10 sm:w-auto sm:translate-x-0">
                    <div className="float rounded-2xl border border-line bg-surface/90 p-4 shadow-2xl backdrop-blur [animation-delay:-4s]">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">Currently</p>
                        <ul className="mt-2 space-y-1.5 text-sm text-white">
                            {[oodser, praeta].map((r) => (
                                <li key={r.company} className="flex items-center gap-2">
                                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink to-violet" />
                                    <abbr title={r.title} className="no-underline">
                                        CTO
                                    </abbr>
                                    <span className="text-muted">·</span>
                                    <span className="text-violet">{r.company}</span>
                                    <span className="ml-auto pl-3 font-mono text-[0.7rem] text-muted">since {r.start}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <a
                href="#skills"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-muted transition-colors hover:text-white lg:flex"
            >
                Scroll
                <span aria-hidden="true" className="flex h-9 w-5 justify-center rounded-full border border-line pt-1.5">
                    <span className="h-2 w-0.5 animate-bounce rounded-full bg-pink" />
                </span>
            </a>
        </section>
    );
}

export default Hero;
