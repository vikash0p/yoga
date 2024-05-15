import Carousel from '@/components/Carousel'
import Perfect from '@/components/HomeComp/Perfect';
import YogaAssan from '@/components/HomeComp/YogaAssan';
import { Elsie } from 'next/font/google';
import React from 'react'

const elsie = Elsie({ weight: "400", subsets: ["latin"], display: "swap" });

const Home = () => {
  return (
    <div>
        <Carousel elsie={elsie} />
        <Perfect />
        <YogaAssan />
    </div>
  )
}

export default Home
