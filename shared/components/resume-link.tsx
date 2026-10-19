import React from 'react';
import { profile } from '../data/profile';
import { Download, FileText } from './icons';

type Props = {
    className?: string;
    label?: string;
    /** `view` opens the PDF in a new tab; `download` saves it with a readable filename. */
    mode?: 'view' | 'download';
};

/** The only place that knows where the resume lives. */
function ResumeLink({ className = 'btn-secondary', label, mode = 'view' }: Props) {
    if (mode === 'download') {
        return (
            <a href={profile.resume.href} download={profile.resume.downloadName} className={className}>
                <Download />
                {label ?? 'Download résumé'}
                <span className="sr-only"> (PDF)</span>
            </a>
        );
    }

    return (
        <a href={profile.resume.href} target="_blank" rel="noopener noreferrer" className={className}>
            <FileText />
            {label ?? 'View résumé'}
            <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
    );
}

export default ResumeLink;
