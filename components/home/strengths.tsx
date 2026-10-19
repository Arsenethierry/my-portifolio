import React from 'react';
import { strengths } from '../../shared/data/profile';
import { DisciplineIcon } from '../../shared/components/icons';
import { Reveal, SpotlightCard } from '../../shared/components/motion';
import SectionHeading from './section-heading';

/* Bento layout: wide / narrow alternating on large screens */
const spans = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-3'];

/* Small animated flows that illustrate the wide cards; decorative only */
const flows: Record<string, string[]> = {
    'Full-stack development': ['Next.js UI', 'REST API', 'Database'],
    'Security & identity': ['Sign-in', 'MFA', 'JWT', 'Access control'],
};

function MiniFlow({ steps }: { steps: string[] }) {
    return (
        <div aria-hidden="true" className="mt-6 flex flex-wrap items-center gap-y-2 rounded-xl border border-line/80 bg-ink/60 p-3">
            {steps.map((step, i) => (
                <React.Fragment key={step}>
                    <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[0.7rem] text-violet">
                        {step}
                    </span>
                    {i < steps.length - 1 && (
                        <span className="flow-line mx-1.5 h-px w-6 bg-line sm:w-10" style={{ animationDelay: `${i * 0.4}s` }} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

function Strengths() {
    return (
        <section aria-labelledby="skills" className="relative py-24 sm:py-32">
            <div className="container-page">
                <Reveal>
                    <SectionHeading
                        id="skills"
                        eyebrow="Technical strengths"
                        title="Engineering across the whole delivery path"
                        intro="From the first commit to the production incident: grouped by discipline, limited to tools I use in my current and past roles."
                    />
                </Reveal>

                <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    {strengths.map((s, i) => (
                        <Reveal as="li" key={s.discipline} delay={(i % 3) * 90} className={spans[i]}>
                            <SpotlightCard className="border-gradient group flex h-full flex-col rounded-2xl bg-surface/70 p-6 transition-colors duration-300 hover:bg-surface sm:p-7">
                                <div className="flex items-center gap-4">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink/25 to-violet/10 text-pink ring-1 ring-inset ring-pink/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                                        <DisciplineIcon icon={s.icon} />
                                    </span>
                                    <h3 className="text-lg font-semibold text-white">{s.discipline}</h3>
                                </div>
                                <p className="mt-4 leading-relaxed">{s.summary}</p>
                                {flows[s.discipline] && <MiniFlow steps={flows[s.discipline]} />}
                                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6" aria-label={`${s.discipline} tools`}>
                                    {s.tools.map((t) => (
                                        <li key={t} className="chip">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Strengths;
