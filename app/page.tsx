import Carousel from '@/components/Carousel'
import Classess from '@/components/HomeComp/Classess';
import Coaches from '@/components/HomeComp/Coaches';
import Gallery from '@/components/HomeComp/Gallery';
import Perfect from '@/components/HomeComp/Perfect';
import Queries from '@/components/HomeComp/Queries';
import Relax from '@/components/HomeComp/Relax';
import YogaAssan from '@/components/HomeComp/YogaAssan';
import Footer from '@/components/reusableComp/Footer';
import { Elsie } from 'next/font/google';
import React from 'react'

const elsie = Elsie({ weight: "400", subsets: ["latin"], display: "swap" });

const Home = () => {
  return (
    <div>
        <Carousel elsie={elsie} />
        <Perfect />
        <YogaAssan />
        <Classess/>
        <Coaches/>
        <Relax />
        <Queries/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Home
