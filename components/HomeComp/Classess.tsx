"use client";
import React, { useState } from "react";
import MyButton from "../reusableComp/MyButton";
import { choose } from "@/utils/data";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, delay, motion } from "framer-motion";
const Classess = () => {
  const { theme } = useTheme();
  const [myImage, setMyImage] = useState<string>(choose[0].img);
  const [myIndex, setMYIndex] = useState(0);

  const ClickHandler = (index: number, img: string) => {

    setMyImage(img);
    setMYIndex(index);
  };

  const imageVariants = {
    initial: { y: -50 },
    animate: {
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <div className={`py-24 ${theme === "light" && "bg-[#d4cbc2] "}`}>
      <div className=" w-full flex flex-row justify-between px-1 md:px-4 lg:px-10 items-center ">
        <h1 className="tex-4xl md:text-4xl lg:text-5xl xl:text-6xl font-serif">
          Choose Your Class
        </h1>
        <MyButton text="View All" />
      </div>
      <div className="w-full flex flex-col lg:flex-row py-10 px-10 ">
        <div className="basis-[65%] space-y-4 lg:space-y-8">
          {choose.map((value, index) => {
            return (
              <section
                key={value.des}
                className="w-full flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-7 cursor-pointer group  p-5 "
                onClick={() => ClickHandler(index, value.img)}
              >
                <div className="">
                  <h3 className="border w-20  border-gray-700 px-8 py-3 rounded-3xl">
                    {value.id}{" "}
                  </h3>
                </div>
                <div className="">
                  <h2
                    className={`font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl group-hover:text-gray-500  transition-colors duration-500 ease-linear ${
                      myIndex === index && "text-gray-500  "
                    }`}
                  >
                    {value.title}{" "}
                  </h2>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <p
                      className={`text-xl w-full group-hover:text-gray-500  transition-colors duration-500 ease-linear ${
                        myIndex === index && "text-gray-500 "
                      } `}
                    >
                      {value.des}{" "}
                    </p>
                    <button
                      type="button"
                      className=" flex flex-col items-center justify-center rounded-full hover:translate-x-2 duration-500 ease-in "
                    >
                      <MoveRight size={40} strokeWidth={0.8} />{" "}
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
        <AnimatePresence>
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            key={myImage}
            className="basis-[35%]"
          >
            <Image
              src={myImage}
              alt="image"
              width={300}
              height={300}
              className=" py-5 lg:py-0 rounded-tl-full rounded-tr-full w-full md:h-[700px] md:py-9 lg:h-full object-cover object-center px-10"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Classess;
