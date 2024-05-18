import CustomerSay from "@/components/ClassesComp/CustomerSay";
import Profile from "@/components/ClassesComp/Profile";
import Review from "@/components/ClassesComp/Review";
import Yoga from "@/components/ClassesComp/Yoga";
import ReusableHero from "@/components/reusableComp/ReusableHero";
import React from "react";
import { Metadata } from "next";

 const metadata: Metadata = {
  title: "Classes - Mantra",
  description:
    "Explore our diverse range of yoga classes designed for all levels. Find the perfect class to enhance your practice.",
  applicationName: "Mantra",
  category: "fitness",
  openGraph: {
    title: "Classes - Mantra",
    description:
      "Explore our diverse range of yoga classes designed for all levels. Find the perfect class to enhance your practice.",
    url: "https://mantra.example.com/classes",
    type: "website",
  },
};

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
