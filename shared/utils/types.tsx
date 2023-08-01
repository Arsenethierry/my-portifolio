export interface PersonalDetails {
    name: string;
    logo: string;
    about: string;
    socialMedia: SocialMedia[];
    work: Work;
    resume?: string;
    profile_img: string;
    calendyUrl?: string;
    typedContent?: string[];
    desc: string;
    ogImage?: string;
}

export interface SocialMedia {
    link: string;
    image_file: string;
    alt_text: string;
}

export interface Work {
    company: string;
    destination: string;
    logo: string;
}

export interface Project {
    slug: string;
    tagLine: string;
    description: string;
    img: string;
    name: string;
    tags: string[];
    github: string;
    category: string[];
    featured: boolean;
    launch_video: string;
    url?: string;
}

export interface Skills {
    name: string;
    src: string; 
}