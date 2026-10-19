import Image from 'next/image';
import React from 'react';
import { profile, publishedEngagements } from '../../shared/data/profile';
import { ArrowUpRight } from '../../shared/components/icons';
import { Reveal, Tilt } from '../../shared/components/motion';import { Engagement } from '../../shared/utils/types';
import SectionHeading from './section-heading';

const isPipeline = (layer: string) => layer === 'Delivery';

/** Product screenshot inside a browser frame. */
function BrowserFrame({ engagement }: { engagement: Engagement }) {
    const image = engagement.image!;
    const host = engagement.url ? new URL(engagement.url).hostname : engagement.name;
    return (
        <Tilt>
            <div className="relative">
                <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-pink/25 via-violet/15 to-sky-400/20 blur-2xl" />
                <div className="overflow-hidden rounded-2xl border border-line bg-raised shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
                    <div aria-hidden="true" className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
                        <span className="flex gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        </span>
                        <span className="mx-auto flex max-w-xs flex-1 items-center justify-center gap-2 rounded-md bg-ink/70 px-3 py-1 font-mono text-xs text-muted">
                            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}>
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                            </svg>
                            {host}
                        </span>
                        <span className="w-12" />
                    </div>
                    <div className="bg-white">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            layout="responsive"
                            sizes="(min-width: 1152px) 1088px, 100vw"
                        />
                    </div>
                </div>
            </div>
        </Tilt>
    );
}

/** Animated layered diagram of the stack an engagement runs on. */
function StackVisual({ engagement, compact }: { engagement: Engagement; compact?: boolean }) {
    return (
        <figure
            className={`relative overflow-hidden rounded-2xl border border-line bg-ink/80 ${compact ? 'p-5' : 'p-5 sm:p-8'}`}
        >
            {!compact && (
                <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            )}
            <figcaption className="relative flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                <span>Stack I work on</span>
                {!compact && (
                    <span className="flex items-center gap-1.5 normal-case tracking-normal">
                        <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                        in production
                    </span>
                )}
            </figcaption>
            <ol className="relative mt-5">
                {engagement.stack.map((layer, li) => (
                    <li key={layer.layer}>
                        {li > 0 && (
                            <span aria-hidden="true" className="flow-line-v ml-5 block h-5 w-px bg-line" style={{ animationDelay: `${li * 0.3}s` }} />
                        )}
                        <div className={`rounded-xl border border-line bg-surface/80 ${compact ? 'p-3' : 'p-4'}`}>
                            <p className="font-mono text-[0.7rem] text-pink">{layer.layer}</p>
                            <ul
                                className="mt-2 flex flex-wrap items-center gap-y-2"
                                aria-label={isPipeline(layer.layer) ? `${layer.layer} pipeline, in order` : layer.layer}
                            >
                                {layer.items.map((item, i) => (
                                    <li key={item} className="flex items-center">
                                        <span className="chip">{item}</span>
                                        {i < layer.items.length - 1 &&
                                            (isPipeline(layer.layer) ? (
                                                <span aria-hidden="true" className="flow-line mx-1.5 h-px w-6 bg-line sm:w-8" />
                                            ) : (
                                                <span aria-hidden="true" className="w-1.5" />
                                            ))}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </figure>
    );
}

function EngagementDetails({ engagement, index, headingId }: { engagement: Engagement; index: number; headingId: string }) {
    return (
        <>
            <p className="font-mono text-sm text-muted">
                <span className="text-gradient font-semibold">{String(index + 1).padStart(2, '0')}</span> / {engagement.period}
            </p>
            <h3 id={headingId} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {engagement.name}
            </h3>
            <p className="mt-1 text-lg text-violet">{engagement.role}</p>

            {engagement.product && (
                <p className="mt-5 max-w-xl leading-relaxed">
                    {engagement.product}
                    {engagement.productSource && <span className="sr-only"> ({engagement.productSource}.)</span>}
                </p>
            )}

            <h4 className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-muted">What I own</h4>
            <ul className="mt-3 space-y-2.5">
                {engagement.ownership.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                        <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-pink" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {engagement.url && (
                <a href={engagement.url} target="_blank" rel="noopener noreferrer" className="btn-secondary group mt-8">
                    Visit {new URL(engagement.url).hostname}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
            )}
        </>
    );
}

function EngagementShowcase({ engagement, index }: { engagement: Engagement; index: number }) {
    const headingId = `work-${engagement.slug}`;

    // With a (wide) product screenshot: full-width frame, details and stack beneath.
    if (engagement.image) {
        return (
            <article aria-labelledby={headingId}>
                <Reveal variant="scale">
                    <BrowserFrame engagement={engagement} />
                </Reveal>
                <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
                    <Reveal className="lg:col-span-7">
                        <EngagementDetails engagement={engagement} index={index} headingId={headingId} />
                    </Reveal>
                    <Reveal delay={120} className="lg:col-span-5">
                        <StackVisual engagement={engagement} />
                    </Reveal>
                </div>
            </article>
        );
    }

    // Without a screenshot: the architecture diagram is the visual.
    return (
        <article aria-labelledby={headingId} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
                <EngagementDetails engagement={engagement} index={index} headingId={headingId} />
            </Reveal>
            <Reveal variant="scale" delay={120} className="lg:col-span-7">
                <StackVisual engagement={engagement} />
            </Reveal>
        </article>
    );
}

function SelectedWork() {
    const github = profile.contact.find((c) => c.kind === 'github');
    return (
        <section aria-labelledby="work" className="relative overflow-hidden py-24 sm:py-32">
            <div aria-hidden="true" className="aurora -right-60 top-40 h-[40rem] w-[40rem] bg-violet/10" />
            <div className="container-page relative">
                <Reveal>
                    <SectionHeading
                        id="work"
                        eyebrow="Selected work"
                        title="Products I build and run"
                        intro="As CTO I hold the technical decisions and still do the engineering: writing features, designing data, shipping deployments, and fixing production when it breaks."
                    />
                </Reveal>
                <div className="mt-16 space-y-24 sm:space-y-32">
                    {publishedEngagements.map((engagement, i) => (
                        <EngagementShowcase key={engagement.slug} engagement={engagement} index={i} />
                    ))}
                </div>
                <Reveal className="mt-20 rounded-2xl border border-line bg-surface/50 p-6 text-sm leading-relaxed text-muted sm:p-8">
                    Source code and internal architecture for these products are private. I’m happy to walk through
                    design decisions, trade-offs, and incidents{' '}
                    <a href="#contact" className="link">
                        in conversation
                    </a>
                    .
                    {github && (
                        <>
                            {' '}
                            Personal and learning repositories are on{' '}
                            <a href={github.href} target="_blank" rel="noopener noreferrer" className="link">
                                GitHub
                                <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                            .
                        </>
                    )}
                </Reveal>
            </div>
        </section>
    );
}

export default SelectedWork;
