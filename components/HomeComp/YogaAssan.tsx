'use client'
import { yogaAsanas } from "@/utils/data";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";

const YogaAssan = () => {
    const {theme}=useTheme();
  return (
    <div
      className={`w-full h-32 bg-white mt-20 text-black flex flex-row gap-20 items-center flex-nowrap overflow-x-hidden ${theme==="light" && "bg-black text-white"}`}
    >
      {yogaAsanas.map((value, index) => {
        return (
          <motion.div
            key={index}
            initial={{ translateX: 0 }}
            animate={{ translateX: 350 }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              loop: true,
            }}
            className=""
          >
            <h1 className="text-4xl font-sans uppercase font-bold ">{value}</h1>
          </motion.div>
        );
      })}
    </div>
  );
};

export default YogaAssan;
