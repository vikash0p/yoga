'use client'
import Image from 'next/image';
import React from 'react'

const ReusableImage = ({img}:{img:string}) => {
  return (
    <Image
      src={img}
      alt="benefits image"
      className="object-cover object-center rounded-full"
      fill
      sizes="100vw"
    />
  );
}

export default ReusableImage
