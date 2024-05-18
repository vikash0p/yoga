'use client'
import Navbar from '@/components/reusableComp/Navbar'
import React from 'react'
import { ThemeProvider } from './theme-provider'
import GoToTop from '@/components/reusableComp/GoToTop'
import Footer from '@/components/reusableComp/Footer'
import { Analytics } from "@vercel/analytics/react";
const GlobalLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
        <GoToTop />
        <Footer />
        <Analytics />
      </ThemeProvider>
    </div>
  );
}

export default GlobalLayout
