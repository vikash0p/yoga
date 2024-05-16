'use client'
import { coach } from "@/utils/data";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import MyButton from "../reusableComp/MyButton";

const Coaches = () => {
    const{theme}=useTheme();

  return (
    <div className="py-5 md:py-8 lg:py-12 xl:py-20 w-full">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-center lg:w-3/4 m-auto antialiased leading-10 -tracking-wider  "
      >
        Find The Strength @ Of Your MindAnd Keep The Health@And Beauty Of
        YourSoul Meet Our Coaches
      </motion.h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-20 gap-y-24 place-items-center xl:px-10 py-10 ">
        {coach.map((value) => {
          return (
            <div key={value.id} className="group relative  ">
              <div
                className={`w-80 h-80 bg-[#d4cbc2] rounded-2xl group-hover:-translate-x-3 group-hover:translate-y-3 duration-500 ease-linear `}
              ></div>
              <div className="absolute top-0">
                <Image
                  src={value.img}
                  alt={value.title}
                  width={400}
                  height={400}
                  className="w-80 h-80 bg-contain bg-center rounded-2xl  "
                />
                <div className="py-5 text-center">
                  <h2 className="text-3xl font-serif font-semibold">
                    {" "}
                    {value.title}
                  </h2>
                  <p>{value.pos} </p>
                </div>
              </div>
              <div className="absolute left-16 right-5 bottom-5  flex-row gap-4 items-center flex opacity-0 group-hover:opacity-100 transition-opacity duration-700  ">
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full cursor-pointer ${
                    theme === "dark" && "text-black"
                  } `}
                >
                  <Facebook />
                </span>
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full cursor-pointer ${
                    theme === "dark" && "text-black"
                  } `}
                >
                  <Twitter />
                </span>
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full  cursor-pointer ${
                    theme === "dark" && "text-black"
                  } `}
                >
                  <Youtube />
                </span>
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full cursor-pointer  ${
                    theme === "dark" && "text-black"
                  } `}
                >
                  <Instagram />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" py-20 md:py-24  lg:py-32 flex flex-col items-center ">
        <MyButton text="View All Coaches" />
      </div>
    </div>
  );
};

export default Coaches;
