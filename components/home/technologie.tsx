import React, { useEffect, useMemo } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RenderCard from './render-skills-card';

const techs = [
    {
        "name": "Javascript",
        "description": "Design and develop bespoke software solutions to meet project requirements",
        "icon": "/images/skills/javascript.svg"
    },
    {
        "name": "ReactJs",
        "description": "Tailwind CSS is basically a modern,trending and utility-first CSS framework for rapidly building custom user interfaces.",
        "icon": "/images/icons/react-2.svg"
    },
    {
        "name": "NodeJs",
        "description": "Tailwind CSS is basically a modern,trending and utility-first CSS framework for rapidly building custom user interfaces.",
        "icon": "/images/icons/nodejs-2.svg"
    },
    {
        "name": "Git",
        "description": "Proficient in using Git for version control and collaboration, with experience in creating and merging branches, resolving conflicts, and using Git in a team environment",
        "icon": "/images/icons/github.svg"
    },
    {
        "name": "MongoDB",
        "description": "Design and maintain MongoDB instances, Troubleshooting MongoDB bottlenecks, Plan procedures for backup in case of a data loss, Optimize performance issues, etc",
        "icon": "/images/skills/mongodb.png"
    },
    {
        "name": "Devops",
        "description": "using Devops tools like Docker, Jenkins, Git, Kubernetes and more, I build and setup new development tools and infrastructure and  ensure that development follows established processes and works as intended",
        "icon": "https://bostami-next.vercel.app/images/preview/fatures/1.png"
    },
]

function Technologies() {
    const control = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const textVariant = useMemo(() => {
        return {
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0.04, y: 100 },
        };
    }, [control, inView])
    return (
        <div
            // 232946
            id="skills"
            className='relative bg-[#061328] flex justify-center'>
            <div className='flex flex-col justify-center max-w-screen-xl items-center px-4 lg:px-7 lg:py-10 text-center pt-[50px]'>
                <motion.h1
                    initial="hidden"
                    animate={control}
                    variants={textVariant}
                    ref={ref}
                    className="text-[#8892B0] text-[32px] md:text-[45px] font-semibold ">Technologies I use</motion.h1>
                <div className='container pt-[50px] pb-[50px] px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {techs.map(tech => <RenderCard tech={tech} />)}
                </div>
            </div>
        </div>
    );
}

export default Technologies;
