'use client'
import Image from 'next/image';
import React from 'react'

const Gallery = () => {
  return (
    <div>
      <h1 className=" max-w-7xl mx-auto text-5xl font-serif font-semibold py-5 lg:ps-10">
        Gallery{" "}
      </h1>
      <div className=" max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:px-5 place-items-center  ">
        <div className="grid gap-4">
          <div className="">
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_02.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear "
              src="/home2_image_gallery_03.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_04.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_05.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_06.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear "
              src="/home2_image_gallery_07.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_08.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear "
              src="/home2_image_gallery_12.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_15.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_19.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_21.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <Image
              width={300}
              height={300}
              className="h-auto max-w-sm rounded-lg object-cover object-center hover:scale-105 transition-transform duration-700 ease-linear"
              src="/home2_image_gallery_15.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery
