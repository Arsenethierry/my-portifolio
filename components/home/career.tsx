import React, { useEffect, useRef } from 'react';
import { career, education, training } from '../../shared/data/profile';
import ResumeLink from '../../shared/components/resume-link';
import { Reveal, SpotlightCard } from '../../shared/components/motion';
import { Role } from '../../shared/utils/types';
import SectionHeading from './section-heading';

/** Fills the timeline line as the reader scrolls through it. */
function useScrollProgress<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let frame = 0;
        const update = () => {
            frame = 0;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const progress = Math.min(1, Math.max(0, (vh * 0.65 - r.top) / r.height));
            el.style.setProperty('--progress', progress.toFixed(3));
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return ref;
}

function RoleCard({ role, delay }: { role: Role; delay: number }) {
    return (
        <Reveal as="li" delay={delay} className="relative pl-10 sm:pl-16">
            <span
                aria-hidden="true"
                className="absolute left-[11px] top-7 h-3 w-3 rounded-full border-2 border-pink bg-ink shadow-[0_0_0_4px_rgba(238,187,195,0.12)] sm:left-[19px]"
            />
            <SpotlightCard className="border-gradient rounded-2xl bg-surface/70 p-6 transition-colors duration-300 hover:bg-surface sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h4 className="text-lg font-semibold text-white sm:text-xl">
                        {role.title ? (
                            <>
                                {role.title} <span className="font-normal text-muted">·</span>{' '}
                                <span className="text-gradient">{role.company}</span>
                            </>
                        ) : (
                            <span className="text-gradient">{role.company}</span>
                        )}
                    </h4>
                    <p className="shrink-0 rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-xs text-violet">
                        <time>{role.start}</time> – <time>{role.end}</time>
                    </p>
                </div>
                <p className="mt-1 text-sm text-muted">{[role.context, role.location].filter(Boolean).join(' · ')}</p>
                <ul className="mt-5 space-y-2.5">
                    {role.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed">
                            <span aria-hidden="true" className="mt-[0.7rem] h-1 w-1 shrink-0 rounded-full bg-violet" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
                {role.stack && (
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${role.company} technologies`}>
                        {role.stack.map((t) => (
                            <li key={t} className="chip">
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </SpotlightCard>
        </Reveal>
    );
}

function Career() {
    const timeline = useScrollProgress<HTMLDivElement>();

    return (
        <section aria-labelledby="experience" className="relative py-24 sm:py-32">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
            <div className="container-page">
                <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                        id="experience"
                        eyebrow="Career"
                        title="From building software to owning it in production"
                        intro="Technical leadership that stays hands-on, built on full-stack engineering and enterprise identity and CRM work."
                    />
                    <ResumeLink mode="download" className="btn-secondary self-start sm:self-auto" />
                </Reveal>

                <div ref={timeline} className="relative mt-16" style={{ '--progress': 0 } as React.CSSProperties}>
                    {/* Track + scroll-linked fill */}
                    <span aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-px bg-line sm:left-6" />
                    <span
                        aria-hidden="true"
                        className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-pink via-violet to-sky-300 sm:left-6"
                        style={{ transform: 'scaleY(var(--progress))' }}
                    />

                    <div className="space-y-16">
                        {career.map((chapter) => (
                            <div key={chapter.id}>
                                <Reveal variant="left" className="relative pl-10 sm:pl-16">
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-[5px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet shadow-[0_0_24px_rgba(238,187,195,0.5)] sm:left-[13px]"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-ink" />
                                    </span>
                                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-pink">{chapter.period}</p>
                                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">{chapter.label}</h3>
                                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{chapter.note}</p>
                                </Reveal>
                                <ol className="mt-8 space-y-6">
                                    {chapter.roles.map((role, i) => (
                                        <RoleCard key={role.company} role={role} delay={i * 100} />
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                        <SpotlightCard className="border-gradient h-full rounded-2xl bg-surface/70 p-6 sm:p-8">
                            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-pink">Education</h3>
                            <ul className="mt-5 space-y-5">
                                {education.map((e) => (
                                    <li key={e.degree}>
                                        <p className="font-semibold text-white">{e.degree}</p>
                                        <p className="mt-1 text-sm text-muted">
                                            {e.institution} · {e.status}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    </Reveal>
                    <Reveal delay={100}>
                        <SpotlightCard className="border-gradient h-full rounded-2xl bg-surface/70 p-6 sm:p-8">
                            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-pink">Training & certificates</h3>
                            <ul className="mt-5 space-y-4 text-sm leading-relaxed">
                                {training.map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Career;
