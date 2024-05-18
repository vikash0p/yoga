import LoginForm from '@/components/FormComponents/LoginForm'
import ReusableHero from '@/components/reusableComp/ReusableHero'
import React from 'react'
import { Metadata } from "next";

export const loginMetadata: Metadata = {
  title: "Login - Mantra",
  description:
    "Access your Mantra account to manage your classes, profile, and more. Log in to continue your yoga journey.",
  applicationName: "Mantra",
  category: "fitness",
  openGraph: {
    title: "Login - Mantra",
    description:
      "Access your Mantra account to manage your classes, profile, and more. Log in to continue your yoga journey.",
    url: "https://mantra.example.com/login",
    type: "website",
  },
};

const Login = () => {
  return (
    <div>
        <ReusableHero text='Login' />
      <LoginForm />
    </div>
  )
}

export default Login
