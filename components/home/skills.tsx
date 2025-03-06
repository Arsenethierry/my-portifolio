import React, { useEffect, useMemo } from 'react';
import HeaderSmall from '../header-small';
import SkillsIcons from './skills-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SkillsExplore() {
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

    const experienceItems = [
        {
            company: "Nblik, Delhi, India",
            role: "Fullstack Web Developer",
            duration: "June 2022 - September 2023",
            achievements: [
                "Designed RESTful APIs using Node.js/TypeScript",
                "Built recyclable code architecture",
                "Collaborated with senior developers"
            ]
        },
        // Add other experience items
    ];
    return (
        <div className='bg-[#061328]'>
            <div className="relative py-10 lg:py-20 bg-[#061328] " id="skills">
                <img
                    src="/images/vectors/cylinder.svg"
                    alt='Cylinder Vector'
                    className="absolute right-0 top-16 sm:top-7 md:top-28 lg:top-7 md:w-50p lg:w-35p"
                />
                <img
                    src="/images/vectors/l-vector.svg"
                    alt='L vector'
                    className='absolute left-0 md:left-35 bottom-0 block md:hidden lg:block w-75p opacity-50 md:opacity-100 sm:w-1/3 md:1/4 lg:w-1/3 pointer-events-none'
                />
                <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
                    <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
                        <div className='sm:w-4/5 relative'>
                            <HeaderSmall text="Who I am" />
                            <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                                He creates elegant, logical web and mobile app solutions. In his hobby time, he
                                designs.
                            </h1>
                            <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                                Think. <span className="text-pink">Code.</span> Debug.
                            </h1>
                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:my-0'>
                        <SkillsIcons />
                    </div>
                </div>

                <section className="py-12 px-4">
                    <motion.h1
                        initial='hidden'
                        animate={control}
                        variants={textVariant}
                        ref={ref}
                        className="text-[#8892B0] text-[32px] md:text-[45px] font-semibold text-center my-5">
                        Professional Experience
                    </motion.h1>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {experienceItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 border-gray-700 p-6 rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold tracking-tight text-white">{item.role}</h3>
                                <p className="text-indigo-500 font-medium mt-2">{item.company}</p>
                                <p className="text-slate-500 text-sm mb-4">{item.duration}</p>
                                <ul className="list-disc list-inside space-y-2 mt-3 mb-4 text-gray-500">
                                    {item.achievements.map((achievement, i) => (
                                        <li key={i} className="text-slate-600">{achievement}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SkillsExplore;