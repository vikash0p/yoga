"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { elsie } from "@/utils/font";
import { feedback } from "@/utils/data";
import Image from "next/image";
import { Quote } from "lucide-react";
export default function Review() {
  return (
    <div className="flex flex-col gap-16 items-center  md:pt-5 lg:py-20 ">
      <h1 className={`text-3xl md:text-4xl lg:text-6xl font-semibold   ${elsie.className} `}>Review</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}

        modules={[Pagination]}
        className="mySwiper max-w-sm md:max-w-3xl lg:max-w-7xl h-[420px] md:h-64 lg:h-[400px]  cursor-pointer  "
      >
        {feedback.map((value) => {
          return (
            <SwiperSlide key={value.feed} className="">
              <div className="flex flex-col  md:flex-row gap-2 lg:gap-5">
                <div className="flex-1">
                  <Image
                    src={value.img}
                    alt={value.name}
                    className=" border border-[#c1a78c] shadow-2xl shadow-[#c1a78c] w-52 h-52 m-auto lg:m-0 lg:w-[500px] lg:h-96 object-cover object-center rounded-full  "
                    width={500}
                    height={400}
                  />
                </div>

                <div className=" flex-1 flex flex-col gap-y-5 pe-5 items-center justify-center">
                  <h3
                    className={`text-xl  md:text-3xl font-semibold text-center line-clamp-3 lg:line-clamp-none   ${elsie.className} `}
                  >
                    {value.feed}{" "}
                  </h3>
                  <div className="flex  gap-5">
                    <h5>{value.name} </h5>
                    <h5 className={`${elsie.className}`}>{value.position} </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <hr className="h-96 w-2 bg-yellow-400" />
      </Swiper>
    </div>
  );
}
