export interface Link {
    label: string;
    href: string;
}

export interface ContactChannel extends Link {
    /** Visible value shown next to the label, e.g. the address itself. */
    value: string;
    kind: 'email' | 'linkedin' | 'github' | 'whatsapp';
}

export interface Profile {
    name: string;
    shortName: string;
    headline: string;
    /** One-paragraph value proposition used in the hero and meta description. */
    summary: string;
    location: string;
    timezone: string;
    availability: string;
    siteUrl: string;
    portrait: { src: string; alt: string };
    ogImage: string;
    resume: { href: string; downloadName: string; updated: string };
    contact: ContactChannel[];
}

export interface Strength {
    discipline: string;
    /** How the discipline shows up in real work — must trace to the resume. */
    summary: string;
    tools: string[];
    icon: 'code' | 'database' | 'server' | 'shield' | 'check' | 'building';
}

export interface Role {
    company: string;
    /** Official title as written on the resume. Omitted when the resume gives none. */
    title?: string;
    /** Secondary line under the company, e.g. a platform or team. */
    context?: string;
    start: string;
    end: string;
    location: string;
    points: string[];
    stack?: string[];
}

export interface CareerChapter {
    id: string;
    label: string;
    period: string;
    /** Why this chapter matters for the overall profile. */
    note: string;
    roles: Role[];
}

export interface StackLayer {
    layer: string;
    items: string[];
}

export interface Engagement {
    slug: string;
    name: string;
    role: string;
    period: string;
    /** Set to false to keep an entry in the data without publishing it. */
    published: boolean;
    product?: string;
    productSource?: string;
    ownership: string[];
    stack: StackLayer[];
    url?: string;
    image?: { src: string; alt: string; width: number; height: number };
}

export interface Education {
    degree: string;
    institution: string;
    status: string;
}
