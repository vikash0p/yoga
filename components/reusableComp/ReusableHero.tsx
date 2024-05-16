'use client'
import React from 'react'
import { ChevronRight } from "lucide-react";
import { useTheme } from 'next-themes';
import { elsie } from '@/utils/font';

const ReusableHero = ({text}:{text:string}) => {
    const {theme}=useTheme();
  return (
    <div className={`w-full h-96 flex flex-col justify-center items-center gap-6 reusableHeroBackground ${theme === "light" ? "bg-[#eae6e1] ":"bg-gray-800"  } ${elsie.className} `}>
      <h1 className='text-6xl font-semibold'>{text} </h1>
      <div className='flex text-2xl items-center '> <span>Home</span> <ChevronRight /> <span>{text}  </span></div>
    </div>
  );
}

export default ReusableHero
