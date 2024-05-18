import RegisterForm from "@/components/FormComponents/RegisterForm";
import ReusableHero from "@/components/reusableComp/ReusableHero";
import React from "react";
import { Metadata } from "next";

export const registerMetadata: Metadata = {
  title: "Register - Mantra",
  description:
    "Join the Mantra community by creating an account. Start your holistic yoga journey with us today.",
  applicationName: "Mantra",
  category: "fitness",
  openGraph: {
    title: "Register - Mantra",
    description:
      "Join the Mantra community by creating an account. Start your holistic yoga journey with us today.",
    url: "https://mantra.example.com/register",
    type: "website",
  },
};

const Register = () => {
  return (
    <div>
        <ReusableHero text="Register" />
      <RegisterForm />
    </div>
  );
};

export default Register;
