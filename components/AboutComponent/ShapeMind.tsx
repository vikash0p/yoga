'use client'
import React from 'react'
import ReusableImage from '../reusableComp/ReusableImage'
import { elsie } from '@/utils/font';
import MyButton from '../reusableComp/MyButton';
import { Plus } from 'lucide-react';

const ShapeMind = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1  lg:grid-cols-2 place-items-center px-1 lg:px-0">
      <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-3/4 lg:h-3/ my-5 md:my-0">
        <ReusableImage img="/gallery-img-5.jpg" />
      </div>
      <div className=" space-y-10">
        <h2 className={`${elsie.className} text-3xl md:text-4xl lg:text-5xl`}>
          We Shape Mind & Body
        </h2>
        <p className="text-lg">
          Nec nam aliquam sem et tortor consequat id. Ornare massa eget egestas
          purus viverra accumsan. In dictum non consectetur a. Sed sed risus
          pretium quam.
        </p>
        <MyButton text="check Schedule" />
        <div className='flex ga5 justify-evenly lg:pe-20'>
          <div className="">
            <div className='text-5xl flex items-center'>
              5k <Plus size={40} strokeWidth={0.8} />{" "}
            </div>
            <p>People Benefited</p>
          </div>

          <div className="">
            <div className="">
              <div className='text-5xl flex items-center'>
                5k <Plus size={40} strokeWidth={0.8} />{" "}
              </div>
              <p>People Benefited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapeMind
