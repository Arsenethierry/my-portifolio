/**
 * Single source of truth for portfolio content.
 *
 * Career facts (titles, companies, dates, skills, education) must match the
 * published resume at /public/Arsene Dev Resume.pdf. When the resume changes,
 * update this file and `profile.resume.updated` together.
 */
import {
    CareerChapter,
    Education,
    Engagement,
    Profile,
    Strength,
} from '../utils/types';

export const profile: Profile = {
    name: 'Arsene Thierry Komezudufashe',
    shortName: 'Arsene Thierry',
    headline: 'Software engineer and CTO who builds, ships, and runs production web systems.',
    summary:
        'I work hands-on across the stack — Next.js, Express and NestJS applications, REST APIs and third-party integrations, relational and document databases — and I own the path to production: Docker, VPS infrastructure, CI/CD, authentication and access control, monitoring, and backup and recovery.',
    location: 'Kigali, Rwanda',
    timezone: 'CAT (UTC+2)',
    availability: 'Open to software engineering and technical leadership roles, and to selected consulting work.',
    siteUrl: 'https://arsenethierry-dev.vercel.app',
    portrait: {
        src: '/images/arsene-portrait.webp',
        alt: 'Portrait of Arsene Thierry Komezudufashe',
    },
    ogImage: '/og-image.jpg',
    resume: {
        href: '/Arsene%20Dev%20Resume.pdf',
        downloadName: 'Arsene-Thierry-Komezudufashe-Resume.pdf',
        updated: '2026',
    },
    contact: [
        {
            kind: 'email',
            label: 'Email',
            value: 'komezarsene15@gmail.com',
            href: 'mailto:komezarsene15@gmail.com?subject=Hello%20Arsene',
        },
        {
            kind: 'linkedin',
            label: 'LinkedIn',
            value: 'in/arsenethierry',
            href: 'https://www.linkedin.com/in/arsenethierry/',
        },
        {
            kind: 'github',
            label: 'GitHub',
            value: 'Arsenethierry',
            href: 'https://github.com/Arsenethierry',
        },
        {
            kind: 'whatsapp',
            label: 'WhatsApp',
            value: '+250 798 816 925',
            href: 'https://wa.me/250798816925?text=Hi%20Arsene%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
        },
    ],
};

export const strengths: Strength[] = [
    {
        discipline: 'Full-stack development',
        icon: 'code',
        summary:
            'Product features end to end: Next.js front ends, Express and NestJS services, REST APIs, and integrations with third-party systems and identity providers.',
        tools: ['Next.js', 'Express', 'NestJS', 'REST APIs', 'Third-party integrations'],
    },
    {
        discipline: 'Data',
        icon: 'database',
        summary:
            'Schema and database design, SQL work, and keeping data accurate when it moves between applications.',
        tools: ['PostgreSQL', 'MongoDB Atlas', 'MySQL', 'SQL Server'],
    },
    {
        discipline: 'DevOps & operations',
        icon: 'server',
        summary:
            'Containerised deployments to self-managed VPS infrastructure through CI/CD, with monitoring, backups, and recovery practices in place.',
        tools: ['Docker', 'VPS administration', 'CI/CD', 'AWS S3', 'Monitoring', 'Backup & recovery'],
    },
    {
        discipline: 'Security & identity',
        icon: 'shield',
        summary:
            'Authentication and access control in application code, plus enterprise IAM experience with multifactor authentication and access management platforms.',
        tools: ['OAuth 2.0', 'JWT', 'MFA', 'Access control', 'NetIQ Advanced Authentication', 'NetIQ Access Manager'],
    },
    {
        discipline: 'Quality & delivery',
        icon: 'check',
        summary:
            'Testing, debugging, and production incident resolution, backed by code reviews, technical documentation, and mentoring developers.',
        tools: ['Testing', 'Debugging', 'Incident resolution', 'Code review', 'Documentation'],
    },
    {
        discipline: 'Enterprise platforms',
        icon: 'building',
        summary:
            'Supporting Microsoft Dynamics CRM environments and reconciling data across CRM systems, databases, and third-party applications.',
        tools: ['Microsoft Dynamics CRM', 'VPN', 'Secure file sharing'],
    },
];

export const engagements: Engagement[] = [
    {
        slug: 'oodser',
        name: 'Oodser',
        role: 'Chief Technology Officer',
        period: 'Sept 2025 – Present',
        published: true,
        product:
            'A hiring platform that connects verified professionals with companies, with job matching for candidates and a stage-based applicant pipeline for employers.',
        productSource: 'Product description from oodser.com',
        ownership: [
            'Hands-on full-stack product development',
            'Technical and architecture decisions',
            'Hosting and production delivery',
            'Testing and production troubleshooting',
            'Code review, documentation, and mentoring a small team',
        ],
        stack: [
            { layer: 'Application', items: ['Next.js', 'Express'] },
            { layer: 'Data', items: ['MongoDB Atlas'] },
            { layer: 'Delivery', items: ['CI/CD', 'Docker', 'VPS'] },
        ],
        url: 'https://oodser.com',
        image: {
            src: '/images/work/oodser-home.webp',
            alt: 'Oodser homepage: “A smarter way to hire & get hired” with Get Started and Learn More buttons',
            width: 1600,
            height: 521,
        },
    },
    {
        slug: 'praeta-consult',
        name: 'Praeta Consult',
        role: 'Chief Technology Officer',
        period: 'April 2026 – Present',
        published: true,
        ownership: [
            'Hands-on full-stack development, REST APIs, and third-party integrations',
            'Database design and SQL work on PostgreSQL',
            'Self-managed production deployments and infrastructure',
            'Authentication, access control, and AWS S3 integration',
            'Monitoring, backups, recovery, and incident resolution',
            'Technical decisions, code review, documentation, and knowledge transfer',
        ],
        stack: [
            { layer: 'Application', items: ['Next.js', 'NestJS', 'REST APIs'] },
            { layer: 'Data & storage', items: ['PostgreSQL', 'AWS S3'] },
            { layer: 'Delivery', items: ['CI/CD', 'Docker', 'VPS'] },
            { layer: 'Operations', items: ['Auth & access control', 'Monitoring', 'Backup & recovery'] },
        ],
    },
    {
        // Not listed on the resume and no public record of the role yet.
        // Publish once the role and contributions are confirmed.
        slug: 'ikazestores',
        name: 'IkazeStores',
        role: 'To be confirmed',
        period: '',
        published: false,
        ownership: [],
        stack: [],
        url: 'https://ikazestores.com',
    },
];

export const career: CareerChapter[] = [
    {
        id: 'leadership',
        label: 'Technical leadership',
        period: '2025 – Present',
        note: 'CTO responsibilities alongside day-to-day engineering: I still write the code, run the deployments, and handle the incidents.',
        roles: [
            {
                company: 'Oodser',
                title: 'Chief Technology Officer',
                start: 'Sept 2025',
                end: 'Present',
                location: 'Kigali, Rwanda',
                points: [
                    'Contribute hands-on to full-stack product development using Next.js and Express, with MongoDB Atlas as the data platform.',
                    'Manage application hosting and production delivery using Docker, VPS infrastructure, and CI/CD pipelines.',
                    'Make technical and architecture decisions and contribute to testing, production troubleshooting, and ongoing maintenance.',
                    'Support code quality and maintainability through code reviews, technical documentation, and mentoring a small team.',
                ],
                stack: ['Next.js', 'Express', 'MongoDB Atlas', 'Docker', 'CI/CD'],
            },
            {
                company: 'Praeta Consult',
                title: 'Chief Technology Officer',
                start: 'April 2026',
                end: 'Present',
                location: 'Kigali, Rwanda',
                points: [
                    'Lead hands-on full-stack development using Next.js and NestJS, including REST APIs and third-party system integrations.',
                    'Work with relational databases, including PostgreSQL, on database design and SQL.',
                    'Manage application infrastructure and self-managed production deployments using Docker, VPS environments, and CI/CD pipelines.',
                    'Support authentication and access-control implementation, AWS S3 integration, production monitoring, backups, and recovery.',
                    'Coordinate technical decisions, testing, production incident resolution, code reviews, documentation, and knowledge transfer to developers.',
                ],
                stack: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS S3', 'Docker', 'CI/CD'],
            },
        ],
    },
    {
        id: 'enterprise',
        label: 'Enterprise systems & identity',
        period: '2023 – Present',
        note: 'Support and identity work rather than application development. It shapes how I build: keeping data consistent across systems, running MFA and access management in enterprise environments, and seeing production issues from the user’s side.',
        roles: [
            {
                company: 'Teknowledge',
                context: 'Microsoft Dynamics CRM',
                start: 'Sept 2024',
                end: 'Present',
                location: 'Kigali, Rwanda',
                points: [
                    'Support Microsoft Dynamics CRM environments and help maintain data integrity and accuracy across client databases.',
                    'Troubleshoot and reconcile data across CRM systems, databases, and third-party applications.',
                    'Apply enterprise security practices, including VPN management, multifactor authentication, and secure file sharing.',
                    'Provide technical support to distributed EMEA teams and assist with enterprise software and licensing issues.',
                ],
            },
            {
                company: 'OpenText / NetIQ',
                title: 'IAM Support Engineer',
                start: 'Sept 2023',
                end: 'Sept 2024',
                location: 'Kigali, Rwanda',
                points: [
                    'Supported NetIQ Advanced Authentication and Access Manager implementations.',
                    'Worked with secure authentication workflows and multifactor authentication configurations.',
                    'Supported enterprise identity and access management and practices relating to data protection and security compliance.',
                ],
            },
        ],
    },
    {
        id: 'foundation',
        label: 'Software engineering foundation',
        period: '2022 – 2023',
        note: 'Where I started: authentication flows, REST APIs, and identity-provider integration in Next.js applications.',
        roles: [
            {
                company: 'NbliK',
                title: 'Full-Stack Software Engineer',
                start: 'June 2022',
                end: 'Sept 2023',
                location: 'Delhi, India',
                points: [
                    'Implemented user authentication using OAuth 2.0, JWT, and custom authentication flows in Next.js applications.',
                    'Developed REST APIs and integrated front-end components with backend identity-provider services.',
                    'Collaborated with backend developers on application integration and secure authentication functionality.',
                ],
                stack: ['Next.js', 'OAuth 2.0', 'JWT', 'REST APIs'],
            },
        ],
    },
];

export const education: Education[] = [
    {
        degree: 'MSc in Software Engineering',
        institution: 'INES-Ruhengeri',
        status: 'In progress',
    },
    {
        degree: 'Bachelor’s Degree in Computer Application, Cloud Technology & Information Security',
        institution: 'KL University, India',
        status: 'June 2023 · First-class recognition',
    },
];

export const training: string[] = [
    'OpenText training certificates: Data Privacy (2025), Security Essentials, SQL Server, Access Management technical training, OpenText GDPR',
    'NbliK developer internship and full-stack internship',
    'REB Computer Science competition',
];

export const publishedEngagements = engagements.filter((e) => e.published);
