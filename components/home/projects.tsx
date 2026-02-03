import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import RenderCard from './render-project-card';


function Projects() {
    const projects = [
        {
            "id": 1,
            "tags": "#saas #nextjs #nodejs #stripe #dropshipping",
            "projectTitle": "IkazeStores",
            "description": "A SaaS dropshipping platform empowering influencers to launch branded online stores, curate products, and earn on every sale — without holding inventory.",
            "picture": "images/ikazestores.png",
            "url": "https://ikazestores.com"
        },
        {
            "id": 2,
            "tags": "#ai #recruitment #nextjs #saas",
            "projectTitle": "Oodser",
            "description": "An AI-powered hiring platform connecting top talent with fast-growing companies through an agile, data-driven recruitment experience.",
            "picture": "images/oodser.png",
            "url": "https://oodser.com"
        }
    ]
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView])

    const textVariant = useMemo(() => {
        return {
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0.04, y: 100 },
        }
    }, [])
    return (
        <div className='relative h-full bg-[#232946] flex justify-center pb-[50px]' >
            <div className='flex flex-col justify-center max-w-screen-xl items-center px-4 lg:px-7 lg:py-10 text-center pt-[50px]'>
                <motion.h1
                    initial='hidden'
                    animate={control}
                    variants={textVariant}
                    ref={ref}
                    className="text-[#8892B0] text-[32px] md:text-[45px] font-semibold">
                    Featured Projects
                </motion.h1>
                <div className='container pt-[50px] px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {projects.map((item) => (
                        <RenderCard data={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;