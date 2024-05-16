import Yoga from "@/components/ClassesComp/Yoga";
import ReusableHero from "@/components/reusableComp/ReusableHero";
import React from "react";

const Class = () => {
  return (
    <div>
      <ReusableHero text="Yoga Classes" />
      <Yoga />
    </div>
  );
};

export default Class;
