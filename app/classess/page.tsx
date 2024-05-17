import CustomerSay from "@/components/ClassesComp/CustomerSay";
import Profile from "@/components/ClassesComp/Profile";
import Review from "@/components/ClassesComp/Review";
import Yoga from "@/components/ClassesComp/Yoga";
import ReusableHero from "@/components/reusableComp/ReusableHero";
import React from "react";

const Class = () => {
  return (
    <div>
      <ReusableHero text="Yoga Classes" />
      <Yoga />
      <Profile/>
      <CustomerSay />
      {/* <Review/> */}
    </div>
  );
};

export default Class;
