import React from 'react';

interface Props {
    link: string;
    alt_text: string;
    image_file: string;
}

function SocialIcon({ link, alt_text, image_file }: Props) {
    return (
        <a href={link}>
            <img
                src={image_file}
                alt={alt_text}
                className='w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75'
            />
        </a>
    )
}

function SocialBar(): JSX.Element {
    const socialMedia = [
        {
            "name": "gmail",
            "url": "mailto:komezarsene15@gmail.com",
            "icon": "/images/icons/mail.svg"
        },
        {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/arsenethierry/",
            "icon": "/images/icons/linkedin.svg"
        },
        {
            "name": "github",
            "url": "https://github.com/Arsenethierry",
            "icon": "images/icons/github.svg"
        },
        {
            "name": "instagram",
            "url": "https://www.instagram.com/arsenenocs/",
            "icon": "/images/icons/instagram.svg"
        },
        {
            "name": "facebook",
            "url": "https://www.facebook.com/Arsenenocs",
            "icon": "/images/icons/whatsapp (2).svg"
        },
    ]
    return (
        <div className='fixed left-3 md:left-5 bottom-0 z-30'> 
            <div className='flex flex-col justify-center items-center'>
                {socialMedia.map((item) => (
                    <SocialIcon
                        key={item.name}
                        link={item.url}
                        image_file={item.icon}
                        alt_text={item.name}
                    />
                ))}
                <div className="h-20 md:h-32 mt-2 w-1/12 bg-violet" />
            </div>
        </div>
    );
}

export default SocialBar;