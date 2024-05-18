'use client'
import { blog } from '@/utils/data';
import { elsie } from '@/utils/font';
import Image from 'next/image';
import React from 'react'
import MyButton from '../reusableComp/MyButton';

const BlogData = () => {
  return (
    <div className="w-full py-5 md:py-7 lg:py-10">
      <div className="text-center w-1/2 m-auto ">
        <h2 className={`${elsie.className} text-2xl md:text-3xl lg:text-4xl`}>
          Our Recent Blogs
        </h2>
        <p>
          Phasellus mattis metus eget fermentum semper. Nulla facilisi. Vivamus
          laoreet eros sapien, ut commodo elit lobortis et. Maecenas egestas ex
          nec nisl semper sagittis
        </p>
      </div>
      <div className="w-full md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {blog.map((blog) => {
          return (
            <div key={blog.blogId} className="space-y-5">
              <div className="relative w-full h-80">
                <Image
                  src={blog.blogImg}
                  alt={blog.blogTitle}
                  fill
                  className="object-cover object-center rounded-2xl"
                />
              </div>
              <h5 className={`${elsie.className} line-clamp-2 text-xl md:text-2xl`}>
                {blog.blogTitle}{" "}
              </h5>
              <MyButton text='Read More' />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogData
