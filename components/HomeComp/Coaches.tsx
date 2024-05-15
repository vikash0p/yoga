'use client'
import { motion } from "framer-motion";
import React from "react";

const Coaches = () => {

  return (
    <div className="py-5 md:py-8 lg:py-12 xl:py-20 w-full">
      <motion.h1
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.5}}

       className="w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-center lg:w-3/4 m-auto antialiased leading-10 -tracking-wider  ">Find The Strength @ Of Your MindAnd Keep The Health@And Beauty Of YourSoul Meet Our Coaches</motion.h1>
       <div>

       </div>
    </div>
  );
};

export default Coaches;
