'use client'
import Image from 'next/image';
import React from 'react'

const ReusableImage = ({img}:{img:string}) => {
  return (
    <Image
      src={img}
      alt="benefits image"
      className="object-cover object-center rounded-full border border-[#c1a78c] shadow-2xl shadow-[#c1a78c] "
      fill
      sizes="100vw"
    />
  );
}

export default ReusableImage
