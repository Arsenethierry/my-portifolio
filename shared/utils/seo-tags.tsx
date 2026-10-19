import Head from 'next/head';
import React from 'react';
import { career, education, profile } from '../data/profile';

interface SEOProps {
    title: string;
    description: string;
    /** Path relative to the site root, e.g. "/" — used for canonical and og:url. */
    path?: string;
    noindex?: boolean;
    /** Emit Person structured data (homepage only). */
    personSchema?: boolean;
}

const absolute = (path: string) => new URL(path, profile.siteUrl).toString();

/** Person schema limited to facts stated on the resume. */
function personJsonLd() {
    const current = career[0].roles;
    const sameAs = profile.contact
        .filter((c) => c.kind === 'linkedin' || c.kind === 'github')
        .map((c) => c.href);
    const completed = education.filter((e) => e.status !== 'In progress');

    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        url: profile.siteUrl,
        image: absolute(profile.portrait.src),
        jobTitle: current[0]?.title,
        worksFor: current.map((r) => ({ '@type': 'Organization', name: r.company })),
        alumniOf: completed.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution })),
        address: { '@type': 'PostalAddress', addressLocality: 'Kigali', addressCountry: 'RW' },
        email: `mailto:${profile.contact.find((c) => c.kind === 'email')?.value}`,
        sameAs,
    };
}

function SeoTags({ title, description, path = '/', noindex, personSchema }: SEOProps) {
    const url = absolute(path);
    const image = absolute(profile.ogImage);

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow'} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="profile" />
            <meta property="og:site_name" content={profile.name} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${profile.name} — Software engineer & CTO`} />
            <meta property="profile:first_name" content="Arsene Thierry" />
            <meta property="profile:last_name" content="Komezudufashe" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {personSchema && (
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
                />
            )}
        </Head>
    );
}

export default SeoTags;
