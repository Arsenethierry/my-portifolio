import { useRouter } from "next/router";
import React, { useContext } from "react";
import { PersonalDetailsContext } from "../../shared/utils/context";
import { PersonalDetails } from "../../shared/utils/types";
import { motion } from "framer-motion";
import HeaderSmall from "../header-small";
import Button from "../../shared/components/buttons";
import Typed from "react-typed";

function LandingPage() {
  const config = {
    type: "spring",
    damping: 10,
    stiffness: 80,
  };
  //@ts-ignore

  return (
    <div className="bg-[#001E3C] h-auto sm:h-screen pb-[50px] sm:pb-[0]">
      <div>
        <img
          src="/images/vectors/ellipse.svg"
          alt="Ellipse Vector"
          className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
        />
      </div>
      <img
        src="/images/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        className="block md:hidden absolute right-1/3 top-28 w-1/4 md:w-16 animate-spin pointer-events-none"
      />
      <motion.div
        transition={config}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transitionDuration: "0.2s" }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="h-auto grid grid-cols-12 gap-4 sm:h-84.5vh ml-4 sm:mx-12 pt-[20vh] sm:pt-[0vh] md:mx:16">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            <div className="items-center w-3/4 -mt-10 relative">
              <img
                src="/images/vectors/triangle.svg"
                alt="Triangle 3d Vector"
                className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin"
              />
              <h1 className="text-3xl sm:text-2xl xl:text-2xl font-extrabold text-white leading-none mb-3">
                Arsene Thierry
              </h1>
              <h1 className="text-4xl sm:text-6xl xl:text-4xl font-extrabold text-white leading-none mb-3">
                <Typed
                  strings={[
                    "I'm a Full Stack Developer",
                    "I'm a Next.Js Developer",
                    "I'm a Node.js Developer",
                    "I'm a Express.js Developer",
                    "I'm a Firebase Developer",
                  ]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </h1>
              <h3 className="text-7xl sm:text-5xl font-light text-violet text-justify">
                I am a fullstack web developper, I build interactive, strong and secured website that run across
                platforms & devices.
              </h3>
              <div className="md:hidden flex col-span-12 text-justify text-white justify-center items-center z-[100]">
            <div className="flex flex-wrap justify-center mt-[10px]">
                <img src="/images/no-bg.png" alt="..." className="shadow-lg rounded-[10px] max-w-full h-[300px] align-middle w-[95vw] border-[10px] border-[#223C5C]" />
            </div>
          </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
                <div className="sm:col-span-1 xl:col-span-1">
                  <a href="https://wa.me/%2B919014592736?text=Hi%20Arsene%2C%20I%20saw%20your%20portifolio%20and%20..."
                    target="_blank">
                    <Button
                      type="solid"
                      text="Know more"
                    />
                  </a>
                </div>
                <div className="sm:col-span-1 xl:col-span-1">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ba-WxuTQn8WQB-Wt3cJlAvMD836NF0Dy"
                    download
                  >
                    <Button
                      type="outlined"
                      text="Resume"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white justify-end items-end ">
            <div className="flex flex-wrap justify-center">
              <div className="">
                <img src="/images/no-bg.png" alt="..." className="rounded-full w-[30vw] lg:w-[20vw] max-w-full h-auto align-middle border-[10px] lg:border-[30px] 2xl:border-[40px] border-[#223C5C]" />
              </div>
            </div>
          </div>
          {/* <div className="md:hidden flex col-span-12 text-justify text-white justify-center items-center z-[100]">
            <div className="flex flex-wrap justify-center">
                <img src="/images/no-bg.png" alt="..." className="shadow-lg rounded max-w-full h-auto align-middle w-[95vw] border-[10px] border-[#223C5C]" />
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
