"use client";
import Image from "next/image";
import React from "react";

const Relax = () => {
  return (
    <div className="w-full  grid grid-cols-1 lg:grid-cols-2 place-items-center ">
      <div className="relative w-3/4 md:w-1/2 lg:w-3/4 h-[400px] md:h-[500px] lg:h-[650px] ">
        <Image
          src={"/filler5-img-01.jpg"}
          alt="image"
          fill
          className="object-cover object-center rounded-full hover:scale-105 transition-transform duration-700 ease-linear"
          sizes="(min-width: 1040px) 37.5vw, (min-width: 780px) 50vw, 75vw"
        />
      </div>
      <div className="space-y-10 lg:space-y-20 px-1 py-5 lg:py-0 lg:px-0">
        <div className=" space-y-4 lg:space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">
            Mind Calming{" "}
          </h2>
          <p className="text-lg  lg:w-3/4">
            Morbi non arcu risus quis varius quam. Ante in nibh mauris cursus
            mattis. Nisi est sit amet facilisis magna. Egestas pretium aenean
            pharetra magna ac placerat vestibulum.
          </p>
        </div>
        <div className="">
          <div className="space-y-4 lg:space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Mind Calming{" "}
            </h2>
            <p className="text-lg  lg:w-3/4">
              Morbi non arcu risus quis varius quam. Ante in nibh mauris cursus
              mattis. Nisi est sit amet facilisis magna. Egestas pretium aenean
              pharetra magna ac placerat vestibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relax;
