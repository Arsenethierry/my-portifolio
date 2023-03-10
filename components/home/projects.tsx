import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import RenderCard from './render-project-card';


function Projects() {
    const projects = [
        {   
            "id": 1,
            "tags": "#fullstack #reactJs #socket.io #redux",
            "projectTitle": "Social Media App",
            "description": "A full stack social media web application built with socket.io and mernstack",
            "picture": "images/messenger.jpg"
        },
        {   
            "id": 2,
            "tags": "#nextjs #stripe #nodejs #mui",
            "projectTitle": "Ecommerce with Stripe payment",
            "description": "A full functioning e-comerce website with stripe payment. it's built with nodejs and reactjs",
            "picture": "images/ecomerce.png"
        },
        {   
            "id": 3,
            "tags": "#nextjs #react-query #nodejs",
            "projectTitle": "Blog Web App",
            "description": "A full stack social media web application built with socket.io and mernstack",
            "picture": "images/mern-blog.png"
        },
        {   
            "id": 4,
            "tags": "#nexjs #tailwindcss",
            "projectTitle": "Portfolio",
            "description": "A full stack social media web application built with socket.io and mernstack",
            "picture": "images/portfolio.png"
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
                    Some of Projects I made
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