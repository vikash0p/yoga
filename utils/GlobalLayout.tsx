'use client'
import Navbar from '@/components/reusableComp/Navbar'
import React from 'react'

const GlobalLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default GlobalLayout
