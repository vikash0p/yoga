'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { elsie } from "@/utils/font";
import { feedback } from "@/utils/data";
import Image from "next/image";
import { Quote } from "lucide-react";
export default function CustomerSay() {
  return (
    <div className="flex flex-col gap-16 items-center  py-20">
      <h1
        className={`text-3xl md:text-4xl lg:text-6xl font-semibold  ${elsie.className} `}
      >
        What Our Customers Say
      </h1>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets:true
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper max-w-md md:max-w-3xl lg:max-w-7xl h-[400px] cursor-pointer  "
      >
        {feedback.map((value) => {
          return (
            <SwiperSlide key={value.feed} className="">
              <div className="space-y-5 ">
                <Quote size={50} className="m-auto" />
                <h3
                  className={`text-xl line-clamp-3 md:line-clamp-none md:text-2xl font-semibold text-center  ${elsie.className} `}
                >
                  {value.feed}{" "}
                </h3>
                <div className="flex gap-5 items-center justify-center">
                  <div className="">
                    <Image
                      src={value.img}
                      alt={value.name}
                      className="w-28 h-28 object-cover object-center rounded-full border border-[#c1a78c] "
                      width={109}
                      height={100}
                    />
                  </div>
                  <div className="">
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
