"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import MyButton from "../reusableComp/MyButton";
import { Plus } from "lucide-react";
const Perfect = () => {
  return (
    <div className="w-full  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-12">
      <div className="relative ">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="background_Image relative m-auto  "
        ></motion.div>
        <div className="w-full h-[500px] md:h-[600px] lg:h-full absolute  top-10  z-20 ">
          <Image
            src={"/yoga-with-mat.png"}
            alt="images "
            fill
            className="object-contain ps-12"
            sizes="(min-width: 1280px) calc(33.31vw - 47px), (min-width: 1040px) calc(50vw - 48px), calc(100vw - 48px)"
          />
        </div>
      </div>
      <div className="mt-52  md:mt-96 lg:mt-0 px-1">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-5xl  font-serif ">
            Shape Your Perfect Body
          </h2>
          <h5 className="text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia.
          </h5>
          <MyButton
            text="Check Schedule"
            ariaLabel="Click Me Button with Arrow Icon"
          />
        </div>
        <div className="flex justify-between md:justify-evenly lg:justify-between py-10  pe-10">
          <div className="font-mono">
            <h3 className="flex text-4xl md:text-4xl lg:text-6xl   items-center">
              <span>8K</span> <Plus className="" strokeWidth={0.5} size={40} />
            </h3>
            <p className=" text-xl md:text-2xl">Happy Clients</p>
          </div>
          <div className="font-mono">
            <h3 className="flex  text-4xl md:text-4xl lg:text-6xl items-center">
              <span>10</span>{" "}
              <span className="text-6xl">
                {" "}
                <Plus strokeWidth={0.5} size={40} />
              </span>
            </h3>
            <p className="text-xl md:text-2xl">Yoga Coaches</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative w-[90%] m-auto h-[500px]  ">
          <Image
            src={"/fiiller3-img.jpg"}
            alt="images "
            fill
            className="object-cover  object-center rounded-full border border-[#c1a78c] shadow-2xl shadow-[#c1a78c]"
            sizes="(min-width: 1280px) calc(33.31vw - 39px), (min-width: 1040px) calc(50vw - 40px), calc(100vw - 40px)"
          />
        </div>
      </div>
    </div>
  );
};

export default Perfect;
