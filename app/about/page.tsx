import BenefitOf from '@/components/AboutComponent/BenefitOf'
import ShapeMind from '@/components/AboutComponent/ShapeMind'
import Review from '@/components/ClassesComp/Review'
import Coaches from '@/components/HomeComp/Coaches'
import ReusableHero from '@/components/reusableComp/ReusableHero'
import React from 'react'

import { Metadata } from "next";

 const metadata: Metadata = {
  title: "About Us - Mantra",
  description:
    "Learn more about Mantra, our mission, vision, and the team dedicated to bringing holistic yoga practices to you.",
  applicationName: "Mantra",
  category: "fitness",
  openGraph: {
    title: "About Us - Mantra",
    description:
      "Learn more about Mantra, our mission, vision, and the team dedicated to bringing holistic yoga practices to you.",
    url: "https://mantra.example.com/about-us",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <ReusableHero text='About' />
      <BenefitOf />
      <ShapeMind />
      <Review/>
      <Coaches />
    </div>
  )
}

export default page
