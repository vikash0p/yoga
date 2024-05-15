import React from 'react'
import MyButton from '../reusableComp/MyButton';

const Classess = () => {
  return (
    <div className=" py-24">
      <div className=" w-full flex flex-row justify-between px-1 md:px-4 lg:px-10 items-center ">
        <h1 className="tex-4xl md:text-4xl lg:text-5xl xl:text-6xl font-serif">
          Choose Your Class
        </h1>
        <MyButton text="View All" />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Classess
