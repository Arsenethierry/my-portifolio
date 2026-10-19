import React from 'react';

type Props = {
    id: string;
    eyebrow: string;
    title: string;
    intro?: React.ReactNode;
};

function SectionHeading({ id, eyebrow, title, intro }: Props) {
    return (
        <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
            </h2>
            {intro && <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{intro}</p>}
        </div>
    );
}

export default SectionHeading;
