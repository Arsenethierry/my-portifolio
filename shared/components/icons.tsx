import React from 'react';
import { ContactChannel, Strength } from '../utils/types';

type IconProps = { className?: string };

const stroke = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

export const ArrowUpRight = ({ className = 'h-4 w-4' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <path d="M7 17 17 7M8 7h9v9" />
    </svg>
);

export const ArrowDown = ({ className = 'h-4 w-4' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
);

export const FileText = ({ className = 'h-4 w-4' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
);

export const Download = ({ className = 'h-4 w-4' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
);

export const MenuIcon = ({ className = 'h-6 w-6' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
);

export const CloseIcon = ({ className = 'h-6 w-6' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <path d="M18 6 6 18M6 6l12 12" />
    </svg>
);

const Mail = ({ className = 'h-5 w-5' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
    </svg>
);

const Chat = ({ className = 'h-5 w-5' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const LinkedIn = ({ className = 'h-5 w-5' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
);

const GitHub = ({ className = 'h-5 w-5' }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2z"
        />
    </svg>
);

const disciplinePaths: Record<Strength['icon'], React.ReactNode> = {
    code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" />,
    database: (
        <>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </>
    ),
    server: (
        <>
            <rect x="2" y="3" width="20" height="7" rx="2" />
            <rect x="2" y="14" width="20" height="7" rx="2" />
            <path d="M6 6.5h.01M6 17.5h.01M10 6.5h8M10 17.5h8" />
        </>
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />,
    check: (
        <>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
        </>
    ),
    building: (
        <>
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
        </>
    ),
};

export const DisciplineIcon = ({ icon, className = 'h-5 w-5' }: IconProps & { icon: Strength['icon'] }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        {disciplinePaths[icon]}
    </svg>
);

const channelIcons: Record<ContactChannel['kind'], (p: IconProps) => JSX.Element> = {
    email: Mail,
    linkedin: LinkedIn,
    github: GitHub,
    whatsapp: Chat,
};

export const ChannelIcon = ({ kind, className }: IconProps & { kind: ContactChannel['kind'] }) => {
    const Icon = channelIcons[kind];
    return <Icon className={className} />;
};
