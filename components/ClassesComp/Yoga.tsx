"use client";
import { elsie } from "@/utils/font";
import Image from "next/image";
import React from "react";
import { CalendarDays, CircleUserRound } from "lucide-react";

const Yoga = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20 px-2 md:px-10 gap-10">
      <div className="relative w-full h-80 md:h-[630px] ">
        <Image
          src={"/class/Yoga-Ads-1-1.png"}
          alt="yoga ads"
          fill
          className="object-cover rounded-2xl border bg-gray-800 border-[#eae6e1]"
          sizes="(min-width: 1040px) calc(50vw - 62px), (min-width: 780px) calc(100vw - 81px), calc(99.78vw - 16px)"
        />
      </div>
      <div className="w-full h- md:h-[630px] flex flex-col gap-10  ">
        <div className="w-full h-1/2   group ">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 transition-colors duration-700 ease-linear group-hover:bg-[#c1a78c] border-[#eae6e1] border rounded-2xl ">
            <div className="flex flex-col gap-3 p-7 ">
              <p className="text-sm">Instructor</p>
              <h2
                className={`text-3xl md:text-4xl text-[#c1a78c] group-hover:text-black ${elsie.className}`}
              >
                Standing Yoga
              </h2>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, cumque officia. Laudantium aliquam aliquid ex sint
                reiciendis, doloremque aperiam! Facere?
              </p>
              <div className="flex gap-3 items-center">
                <CalendarDays
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>May 2, 2028 @ 10:00 am - 5:00 pm</p>
              </div>
              <div className="flex gap-3 items-center">
                <CircleUserRound
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>Trainer : Edwin</p>
              </div>
            </div>
            <div className="relative w-full h-full">
              <Image
                src={"/class/Vinyasa-Yoga.jpg"}
                alt="yoga ads"
                fill
                className="object-cover rounded-full p-7 group-hover:scale-95 transition-transform duration-500 ease-linear"
                sizes="(min-width: 1040px) calc(25vw - 87px), (min-width: 780px) calc(50vw - 97px), calc(99.78vw - 72px)"
              />
            </div>
          </div>
        </div>

        {/* second */}

        <div className="w-full h-1/2   group ">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 transition-colors duration-700 ease-linear group-hover:bg-[#c1a78c] border-[#eae6e1] border rounded-2xl ">
            <div className="flex flex-col gap-3 p-7 ">
              <p className="text-sm">Instructor</p>
              <h2
                className={`text-3xl md:text-4xl text-[#c1a78c] group-hover:text-black ${elsie.className}`}
              >
                Meditation
              </h2>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, cumque officia. Laudantium aliquam aliquid ex sint
                reiciendis, doloremque aperiam! Facere?
              </p>
              <div className="flex gap-3 items-center">
                <CalendarDays
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>May 2, 2028 @ 10:00 am - 5:00 pm</p>
              </div>
              <div className="flex gap-3 items-center">
                <CircleUserRound
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>Trainer: Saara</p>
              </div>
            </div>
            <div className="relative w-full h-full">
              <Image
                src={"/class/Hatha-Yoga.jpg"}
                alt="yoga ads"
                fill
                className="object-cover rounded-full p-7 group-hover:scale-95 transition-transform duration-500 ease-linear"
                sizes="(min-width: 1040px) calc(25vw - 87px), (min-width: 780px) calc(50vw - 97px), calc(99.78vw - 72px)"
              />
            </div>
          </div>
        </div>
        {/* second end */}
      </div>
      {/* second row */}

      <div className="w-full h- md:h-[630px] flex flex-col gap-10  ">
        <div className="w-full h-1/2   group ">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 transition-colors duration-700 ease-linear group-hover:bg-[#c1a78c] border-[#eae6e1] border rounded-2xl ">
            <div className="flex flex-col gap-3 p-7 ">
              <p className="text-sm">Instructor</p>
              <h2
                className={`text-3xl md:text-4xl text-[#c1a78c] group-hover:text-black ${elsie.className}`}
              >
                Marichyasana
              </h2>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, cumque officia. Laudantium aliquam aliquid ex sint
                reiciendis, doloremque aperiam! Facere?
              </p>
              <div className="flex gap-3 items-center">
                <CalendarDays
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>May 2, 2028 @ 10:00 am - 5:00 pm</p>
              </div>
              <div className="flex gap-3 items-center">
                <CircleUserRound
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>Trainer : Jamine</p>
              </div>
            </div>
            <div className="relative w-full h-full">
              <Image
                src={"/class/Ashtanga-Yoga.jpg"}
                alt="yoga ads"
                fill
                className="object-cover rounded-full p-7 group-hover:scale-95 transition-transform duration-500 ease-linear"
                sizes="(min-width: 1040px) calc(25vw - 87px), (min-width: 780px) calc(50vw - 97px), calc(99.78vw - 72px)"
              />
            </div>
          </div>
        </div>

        {/* second */}

        <div className="w-full h-1/2   group ">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 transition-colors duration-700 ease-linear group-hover:bg-[#c1a78c] border-[#eae6e1] border rounded-2xl ">
            <div className="flex flex-col gap-3 p-7 ">
              <p className="text-sm">Instructor</p>
              <h2
                className={`text-3xl md:text-4xl text-[#c1a78c] group-hover:text-black ${elsie.className}`}
              >
                Prenatal Yoga
              </h2>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, cumque officia. Laudantium aliquam aliquid ex sint
                reiciendis, doloremque aperiam! Facere?
              </p>
              <div className="flex gap-3 items-center">
                <CalendarDays
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>May 2, 2028 @ 10:00 am - 5:00 pm</p>
              </div>
              <div className="flex gap-3 items-center">
                <CircleUserRound
                  size={30}
                  className="text-[#c1a78c] group-hover:text-black"
                />
                <p>Trainer: Laara</p>
              </div>
            </div>
            <div className="relative w-full h-full">
              <Image
                src={"/class/Prenatal-Yoga.jpg"}
                alt="yoga ads"
                fill
                className="object-cover rounded-full p-7 group-hover:scale-95 transition-transform duration-500 ease-linear"
                sizes="(min-width: 1040px) calc(25vw - 87px), (min-width: 780px) calc(50vw - 97px), calc(99.78vw - 72px)"
              />
            </div>
          </div>
        </div>
        {/* second end */}
      </div>
      <div className="relative w-full h-80 md:h-[630px] ">
        <Image
          src={"/class/Yoga-Ads-2-1.png"}
          alt="yoga ads"
          fill
          className="object-cover rounded-2xl border bg-gray-800 border-[#eae6e1]"
          sizes="(min-width: 1040px) calc(50vw - 62px), (min-width: 780px) calc(100vw - 81px), calc(99.78vw - 16px)"
        />
      </div>
    </div>
  );
};

export default Yoga;
