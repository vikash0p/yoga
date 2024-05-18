import Image from "next/image";
import React from "react";
import ReusableImage from "../reusableComp/ReusableImage";
import { elsie } from "@/utils/font";
import { Benefit } from "@/utils/data";

const BenefitOf = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center px-1 pt-5  pb-20 lg:px-20">
      <div className="space-y-10">
        <div className="">
          <h5 className={`${elsie.className} text-lg `}>Benefits Of</h5>
          <h2 className={`${elsie.className} text-3xl md:text-4xl lg:text-5xl`}>
            Yoga & Meditation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Benefit.map((value) => {
            return (
              <div key={value.title} className="space-y-2">
                <h3 className={`${elsie.className} text-2xl md:text-3xl`}>{value.title}</h3>
                <h4>{value.description}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-3/4 lg:h-3/ my-5 md:my-0">
        <ReusableImage img="/class/Vinyasa-Yoga.jpg" />
      </div>
    </div>
  );
};

export default BenefitOf;
