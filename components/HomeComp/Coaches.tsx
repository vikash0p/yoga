"use client";
import { coach } from "@/utils/data";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import MyButton from "../reusableComp/MyButton";
import CoachesHeading from "./CoachesHeading";
import { usePathname } from "next/navigation";

const Coaches = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="py-5 md:py-8 lg:py-12 xl:py-20 w-full">
      <CoachesHeading
        text={
          pathname === "/"
            ? " Find The Strength @ Of Your MindAnd Keep The Health@And Beauty Of YourSoul Meet Our Coaches"
            : "Meet Our Trainers"
        }
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-10 place-items-center xl:px-10 py-10 ">
        {coach.map((value) => {
          return (
            <div key={value.id} className="group relative">
              <div className="w-72 h-80 bg-[#d4cbc2] rounded-2xl group-hover:-translate-x-3 group-hover:translate-y-3 duration-500 ease-linear"></div>
              <div className="absolute top-0">
                <Image
                  src={value.img}
                  alt={value.title}
                  width={400}
                  height={400}
                  className="w-72 h-80 bg-contain bg-center rounded-2xl"
                />
                <div className="py-5 text-center">
                  <h2 className="text-3xl font-serif font-semibold">
                    {value.title}
                  </h2>
                  <p>{value.pos}</p>
                </div>
              </div>
              <div className="absolute left-16 right-5 bottom-5 flex gap-4 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full cursor-pointer ${
                    theme === "dark" ? "text-black" : ""
                  }`}
                >
                  <Facebook />
                </span>
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full cursor-pointer ${
                    theme === "dark" ? "text-black" : ""
                  }`}
                >
                  <Twitter />
                </span>
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full cursor-pointer ${
                    theme === "dark" ? "text-black" : ""
                  }`}
                >
                  <Youtube />
                </span>
                <span
                  className={`bg-[#d4cbc2] p-2 rounded-full cursor-pointer ${
                    theme === "dark" ? "text-black" : ""
                  }`}
                >
                  <Instagram />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-20 md:py-24 lg:py-32 flex flex-col items-center">
        <MyButton
          text="View All Coaches"
          ariaLabel="Click Me Button with Arrow Icon"
        />
      </div>
    </div>
  );
};

export default Coaches;
