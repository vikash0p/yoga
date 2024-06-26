'use client'
import { profileData } from '@/utils/data'
import { elsie } from '@/utils/font'
import { Plus } from 'lucide-react'
import React from 'react'
import MyButton from '../reusableComp/MyButton'

const Profile = () => {
  return (
    <div
      className="w-full py-10 md:0 md:h-[600px] lg:min-h-screen flex flex-col gap-10 items-center justify-center "
      style={{ backgroundImage: "url('/Group.png')" }}
    >
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center md:w-3/4 ${elsie.className} `}
      >
        {" "}
        Make Yourself A Healthy Being With The Benefits Of Yoga.
      </h1>
      <p className="md:w-3/4 text-center">
        Risus in hendrerit gravida rutrum quisque non tellus. Egestas integer
        eget aliquet nibh praesent tristique magna sit amet. Sit amet faucibus
        et molestie ac venenatis urna cursus eget.
      </p>
      <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-10">
        {profileData.map((value) => {
          return (
            <div key={value.id} className={`${elsie.className}`}>
              <div className="flex flex-col gap-3 xl:gap-6 items-center">
                <span className="flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl">
                  {value.num} <Plus className="" size={40} strokeWidth={0.8} />{" "}
                </span>
                <h2 className="text-3xl font-semibold">{value.title} </h2>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <MyButton
          text="Find Our More"
          ariaLabel="Click Me Button with Arrow Icon with find our more"
        />
      </div>
    </div>
  );
}

export default Profile
