import React from 'react';
import { strengths } from '../../shared/data/profile';

const tools = Array.from(new Set(strengths.flatMap((s) => s.tools)));
const half = Math.ceil(tools.length / 2);
const rows = [tools.slice(0, half), tools.slice(half)];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
    // Rendered twice so the -50% translate loops seamlessly
    const loop = [...items, ...items];
    return (
        <div className="marquee flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ul
                className={`marquee-track flex shrink-0 items-center gap-3 pr-3 ${reverse ? '[animation-direction:reverse]' : ''}`}
            >
                {loop.map((tool, i) => (
                    <li
                        key={`${tool}-${i}`}
                        aria-hidden={i >= items.length ? true : undefined}
                        className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-body"
                    >
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink to-violet" />
                        {tool}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function TechMarquee() {
    return (
        <section aria-label="Technologies I work with" className="relative border-y border-line/70 bg-abyss/60 py-8">
            <div className="space-y-3">
                <Row items={rows[0]} />
                <Row items={rows[1]} reverse />
            </div>
        </section>
    );
}

export default TechMarquee;
