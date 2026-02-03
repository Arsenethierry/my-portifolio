import React, { useEffect, useMemo } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RenderCard from './render-skills-card';

const techs = [
    {
        name: "IT Support & Helpdesk",
        description: "First-line IT support across multiple regions, resolving hardware, software, and network issues. Experienced with helpdesk ticketing tools, Microsoft Dynamics CRM, and user onboarding.",
        icon: "/images/icons/customer-service.png"
    },
    {
        name: "Network Administration",
        description: "Skilled in system and network administration across Linux, Windows, and Mac OS. Proficient in VPN, VPS configuration, backup & recovery systems, and Cisco Jabber.",
        icon: "/images/icons/api.png"
    },
    {
        name: "Full Stack Development",
        description: "Building secure, scalable web applications using Next.js, React, Node.js, Express, and REST APIs. Experienced in both frontend and backend development with the MERN stack.",
        icon: "/images/icons/code.png"
    },
    {
        name: "Identity & Access Management",
        description: "Implementing secure authentication using NetIQ Advanced Authentication, 2FA, and access control management. Ensuring GDPR compliance and data protection standards.",
        icon: "/images/icons/cyber-security.png"
    },
    {
        name: "DevOps & Cloud",
        description: "Proficient in Docker, Jenkins, CI/CD pipelines, and Git. Experienced in deploying and managing applications on AWS and Azure cloud platforms.",
        icon: "/images/icons/continuous.png"
    },
    {
        name: "Databases & CRM",
        description: "Skilled in MongoDB, SQL Server, PostgreSQL, and MySQL. Experienced in Microsoft Dynamics CRM, Airtable, and Salesforce administration.",
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
