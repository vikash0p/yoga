'use client'
import { motion } from 'framer-motion';
import React from 'react'

const CoachesHeading = ({text}:{text:string}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-center lg:w-3/4 m-auto antialiased leading-10 -tracking-wider  "
    >
     {text}
    </motion.h1>
  );
}

export default CoachesHeading
