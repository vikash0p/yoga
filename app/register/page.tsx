import RegisterForm from "@/components/FormComponents/RegisterForm";
import ReusableHero from "@/components/reusableComp/ReusableHero";
import React from "react";

const Register = () => {
  return (
    <div>
        <ReusableHero text="Register" />
      <RegisterForm />
    </div>
  );
};

export default Register;
