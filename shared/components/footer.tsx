import React from 'react';
import { profile } from '../data/profile';
import { ChannelIcon } from './icons';
import ResumeLink from './resume-link';

function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                    © {new Date().getFullYear()} {profile.name} · {profile.location}
                </p>
                <ul className="flex flex-wrap items-center gap-1">
                    {profile.contact.map((c) => (
                        <li key={c.kind}>
                            <a
                                href={c.href}
                                className="flex h-10 w-10 items-center justify-center rounded text-muted transition-colors hover:text-white"
                                {...(c.kind === 'email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                            >
                                <ChannelIcon kind={c.kind} />
                                <span className="sr-only">{c.label}</span>
                            </a>
                        </li>
                    ))}
                    <li className="ml-2">
                        <ResumeLink className="btn-ghost" label="Résumé" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
