import React from 'react';
import { profile } from '../../shared/data/profile';
import { ArrowUpRight, ChannelIcon } from '../../shared/components/icons';
import { Reveal } from '../../shared/components/motion';
import ResumeLink from '../../shared/components/resume-link';

const topics = [
    {
        title: 'Engineering roles',
        body: 'Full-stack, platform and DevOps, or technical lead positions where I can build and own production systems.',
    },
    {
        title: 'Technical consulting',
        body: 'Next.js and Node.js builds, Docker and CI/CD deployment setup, third-party integrations, and authentication and access control.',
    },
];

function Contact() {
    const email = profile.contact.find((c) => c.kind === 'email')!;
    const others = profile.contact.filter((c) => c.kind !== 'email');

    return (
        <section aria-labelledby="contact" className="relative overflow-hidden py-24 sm:py-32">
            <div className="container-page">
                <Reveal variant="scale">
                    <div className="border-beam relative overflow-hidden rounded-[2rem] bg-surface">
                        <div aria-hidden="true" className="absolute inset-0">
                            <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
                            <div className="aurora -left-32 -top-32 h-[28rem] w-[28rem] bg-pink/20" />
                            <div className="aurora -bottom-40 right-0 h-[30rem] w-[30rem] bg-violet/15 [animation-delay:-8s]" />
                        </div>

                        <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:p-14">
                            <div className="lg:col-span-7">
                                <p className="eyebrow">Contact</p>
                                <h2 id="contact" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                    Let’s talk about <span className="text-gradient">what you’re building.</span>
                                </h2>
                                <p className="mt-5 max-w-xl text-lg leading-relaxed">{profile.availability}</p>

                                <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                                    {topics.map((t) => (
                                        <div key={t.title} className="rounded-2xl border border-line bg-ink/50 p-5 backdrop-blur">
                                            <dt className="font-semibold text-white">{t.title}</dt>
                                            <dd className="mt-2 text-sm leading-relaxed">{t.body}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="rounded-2xl border border-line bg-ink/70 p-6 backdrop-blur sm:p-8">
                                    <p className="text-sm text-muted">Email is the fastest way to reach me.</p>
                                    <a href={email.href} className="btn-primary group mt-4 w-full py-4 text-base">
                                        <ChannelIcon kind="email" className="h-5 w-5" />
                                        Email me
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                    <p className="mt-3 break-all text-center font-mono text-sm text-violet">{email.value}</p>

                                    <ul className="mt-6 divide-y divide-line border-t border-line">
                                        {others.map((c) => (
                                            <li key={c.kind}>
                                                <a
                                                    href={c.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-3 py-3.5 text-body transition-colors hover:text-white"
                                                >
                                                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors group-hover:border-pink/40 group-hover:text-pink">
                                                        <ChannelIcon kind={c.kind} className="h-4 w-4" />
                                                    </span>
                                                    <span className="font-medium">{c.label}</span>
                                                    <span className="ml-auto truncate font-mono text-xs text-muted">{c.value}</span>
                                                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                    <span className="sr-only"> (opens in a new tab)</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <ResumeLink mode="download" className="btn-secondary mt-6 w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;
