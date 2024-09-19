import React, { useEffect, useMemo } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RenderCard from './render-skills-card';

const techs = [
    {
        name: "Technical Support",
        description: "Expert in troubleshooting cybersecurity products, resolving complex issues, and providing excellent customer service. Skilled in translating technical concepts for non-technical users.",
        icon: "/images/icons/customer-service.png"
    },
    {
        name: "Full Stack Development",
        description: "Extensive experience in building modern web applications using Next.js for server-side rendering and static site generation. Proficient in developing scalable backend services with Nest.js",
        icon: "/images/icons/code.png"
    },
    {
        name: "DevOps",
        description: "Proficient in Docker containerization, CI/CD pipeline implementation, and version control with Git. Experienced in automating development and deployment processes.",
        icon: "/images/icons/continuous.png"
    },
    {
        name: "Cybersecurity",
        description: "Strong foundation in network security, threat analysis, and security best practices. Skilled in implementing secure coding techniques and data protection measures.",
        icon: "/images/icons/cyber-security.png"
    },
    {
        name: "Cloud Platforms",
        description: "Experienced in deploying and managing applications on AWS and Azure. Knowledgeable in cloud-native services and serverless architectures.",
        icon: "/images/icons/api.png"
    },
    {
        name: "Databases",
        description: "Skilled in MongoDB for document-based storage, PostgreSQL and MySql for relational data management.",
        icon: "/images/icons/update.png"
    },
]

function Skills() {
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
                    className="text-[#8892B0] text-[32px] md:text-[45px] font-semibold ">My Skills</motion.h1>
                <div className='container pt-[50px] pb-[50px] px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {techs.map(tech => <RenderCard tech={tech} />)}
                </div>
            </div>
        </div>
    );
}

export default Skills;
