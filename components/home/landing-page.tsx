import { useRouter } from "next/router";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Button from "../../shared/components/buttons";
import Typed from "react-typed";
import Image from "next/image";
import { PersonalDetails } from "../../shared/utils/types";

type Props = {
  personalDetails: PersonalDetails;
};

function LandingPage({ personalDetails }: Props) {
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
          loading="lazy"
          className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
        />
      </div>
      <img
        src="/images/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        loading="lazy"
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
                loading="lazy"
                className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin"
              />
              <h1 className="text-3xl sm:text-2xl xl:text-2xl font-extrabold text-white leading-none mb-3">
                {personalDetails.name}
              </h1>
              <h1 className="text-4xl sm:text-6xl xl:text-4xl font-extrabold text-white leading-none mb-3">
                <Typed
                  strings={personalDetails.typedContent}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </h1>
              <h3 className="text-7xl sm:text-5xl font-light text-violet text-justify">
                {personalDetails.desc}
              </h3>
              <div className="md:hidden flex col-span-12 text-justify text-white justify-center items-center z-[100]">
                <div className="flex flex-wrap justify-center mt-[10px]">
                  <Image
                    width={400}
                    height={400}
                    className="shadow-lg rounded-[10px] max-w-full h-[300px] align-middle w-[95vw] border-[10px] border-[#223C5C]"
                    src={'/images/no-bg.png'}
                    placeholder="blur"
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAB//EAB4QAAICAAcAAAAAAAAAAAAAAAECAxEABAUSIoKh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREy/9oADAMBAAIRAxEAPwA+hzbQ6Y8Rjjk3upDsvJLFmj1HuJWqLzD/2Q=='
                    alt="this"
                    priority
                  />
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
                    href="https://drive.google.com/uc?export=download&id=1qtZetNPHWh3uvetPI0ywsGi0F51KqpG0"
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
              <div className="w-[30vw] lg:w-[20vw]">
                <Image
                  width={500}
                  height={500}
                  className="rounded-full max-w-full h-auto align-middle"
                  src={personalDetails.profile_img}
                  placeholder="blur"
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAB//EAB4QAAICAAcAAAAAAAAAAAAAAAECAxEABAUSIoKh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREy/9oADAMBAAIRAxEAPwA+hzbQ6Y8Rjjk3upDsvJLFmj1HuJWqLzD/2Q=='
                  alt="arsene profile image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
