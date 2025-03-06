import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import HeaderSmall from '../header-small';
import SkillsIcons from './skills-icons';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const experienceItems = [
    {
        company: "NbliK, Delhi, India",
        role: "Fullstack Web Developer",
        duration: "June 2022 - September 2023",
        achievements: [
            "Designed and implemented RESTful APIs using Node.js and TypeScript, ensuring high performance and scalability.",
            "Maintained a code library for future implementation by building recyclable architecture.",
            "Collaborated with senior developers to boost efficiency and performance of applications."
        ]
    },
    {
        company: "VSTechworld5 Ltd, Vijayawada, India",
        role: "BackEnd Developer",
        duration: "May 2021 - June 2022",
        achievements: [
            "Contributed on the Back-End side of a clinical web app to collect data of 100+ patients.",
            "Assisted in developing server-based nodejs software by providing inputs and insights.",
            "Acquired a 15% increase in the quality of overall work."
        ]
    },
    {
        company: "MICROVERSE",
        role: "Full Stack Web Development Program",
        duration: "February 2023 - January 2024",
        achievements: [
            "Spent 900+ hours mastering algorithms, data structures, and full-stack development.",
            "Developed projects with Node.js, Express.js, JavaScript, React, Next.js and Redux.",
            "Practiced remote pair-programming using GitHub with 20+ international developers."
        ]
    }
];

function SkillsExplore() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // Default direction is forward
    const [isPaused, setIsPaused] = useState(false);

    // Animation controls
    const control = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3, // Trigger when 30% of the element is visible
    });

    const textVariant = useMemo(() => {
        return {
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0.04, y: 100 },
        }
    }, []);

    // Carousel animation variants
    const carouselVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };


    // Control animation based on view
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    // Auto-scroll functionality
    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === experienceItems.length - 1 ? 0 : prevIndex + 1
        );
    }, [experienceItems?.length]);

    // Setup auto-scrolling interval
    useEffect(() => {
        let interval;

        if (inView && !isPaused) {
            interval = setInterval(() => {
                nextSlide();
            }, 3000); // Change slide every 5 seconds
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [inView, isPaused, nextSlide]);

    const paginate = (newDirection) => {
        // Pause auto-scrolling temporarily when user interacts
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds

        setDirection(newDirection);
        if (newDirection === 1) {
            setCurrentIndex((prevIndex) =>
                prevIndex === experienceItems.length - 1 ? 0 : prevIndex + 1
            );
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? experienceItems.length - 1 : prevIndex - 1
            );
        }
    };

    const handleDotClick = (index) => {
        // Pause auto-scrolling temporarily when user interacts
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds

        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

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

                <section className="py-12 px-4 bg-[#061328]">
                    <motion.h1
                        initial='hidden'
                        animate={control}
                        variants={textVariant}
                        ref={ref}
                        className="text-[#8892B0] text-[32px] md:text-[45px] font-semibold text-center mb-12">
                        Professional Experience
                    </motion.h1>

                    <motion.div
                        className="max-w-4xl mx-auto relative"
                        initial="hidden"
                        animate={control}
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="h-[400px] md:h-[350px] relative overflow-hidden rounded-lg">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={carouselVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="absolute w-full h-full"
                                >
                                    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-xl h-full">
                                        <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                                            {experienceItems[currentIndex].role}
                                        </h3>
                                        <p className="text-indigo-400 font-medium text-lg mb-1">
                                            {experienceItems[currentIndex].company}
                                        </p>
                                        <p className="text-slate-400 text-sm mb-6">
                                            {experienceItems[currentIndex].duration}
                                        </p>
                                        <ul className="space-y-4 mt-3 text-slate-300">
                                            {experienceItems[currentIndex].achievements.map((achievement, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 + 0.2 }}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-indigo-400 mr-2 mt-1">•</span>
                                                    <span>{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(-1)}
                                className="p-2 rounded-full bg-indigo-600/80 backdrop-blur-sm text-white -ml-4 z-10"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(1)}
                                className="p-2 rounded-full bg-indigo-600/80 backdrop-blur-sm text-white -mr-4 z-10"
                            >
                                <ChevronRight size={24} />
                            </motion.button>
                        </div>

                        <div className="flex justify-center mt-6 space-x-2">
                            {experienceItems.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-indigo-500' : 'bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Progress indicator */}
                        {!isPaused && (
                            <div className="w-full bg-gray-700 h-1 mt-4 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-indigo-500 h-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{
                                        duration: 3,
                                        ease: "linear",
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                />
                            </div>
                        )}
                    </motion.div>
                </section>
            </div>
        </div>
    );
}

export default SkillsExplore;