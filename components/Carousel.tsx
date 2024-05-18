'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { heroData } from "@/utils/data";
import Image from "next/image";
import { NextFont } from "next/dist/compiled/@next/font";
import MyButton from "./reusableComp/MyButton";
import { useTheme } from "next-themes";

export default function Carousel({ elsie }: { elsie: NextFont }) {
  const{theme} = useTheme()
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6 * 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper w-full h-96 md:min-h-screen ${
          theme === "light" && "bg-[#eae6e1]"
        }`}
      >
        {heroData.map((value) => (
          <SwiperSlide key={value.id} className="w-full h-full">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center ps-24">
              <AnimatePresence>
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                  className="space-y-4 hidden md:block"
                >
                  <h2 className={`text-2xl lg:text-3xl ${elsie.className}`}>
                    {value.title}
                  </h2>
                  <h5 className={`text-3xl lg:text-6xl ${elsie.className}`}>
                    {value.des}
                  </h5>
                  <p className="text-xl">{value.des2}</p>
                  <MyButton
                    text={" Get Started"}
                    ariaLabel="Click Me Button with Arrow Icon with get Started"
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  key={`bg-${value.id}`}
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="relative w-80 h-80  md:w-[500px] md:h-[500px]  "
                >
                  <Image
                    src={"/frame-img-1.png"}
                    alt="background image"
                    fill
                    className=" border border-[#c1a78c] shadow-2xl shadow-[#c1a78c] m-auto w-full  rounded-full me-12 md:me-0 lg:ms-5 "
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  key={`img-${value.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 right-0 md:right-20 md:top-96 lg:top-0"
                >
                  <Image
                    src={value.img}
                    alt="hero"
                    className="object-contain "
                    width={600}
                    height={600}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
