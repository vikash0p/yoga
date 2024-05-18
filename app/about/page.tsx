import BenefitOf from '@/components/AboutComponent/BenefitOf'
import Review from '@/components/ClassesComp/Review'
import Coaches from '@/components/HomeComp/Coaches'
import ReusableHero from '@/components/reusableComp/ReusableHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <ReusableHero text='About' />
      <BenefitOf />
      <Review/>
      <Coaches />
    </div>
  )
}

export default page
