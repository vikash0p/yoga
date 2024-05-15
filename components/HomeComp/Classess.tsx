import React from 'react'
import MyButton from '../reusableComp/MyButton';

const Classess = () => {
  return (
    <div>
      <div className="">
        <h1 className='tex-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Choose Your Class</h1>
        <MyButton text='View All' />
      </div>
      <div className=""></div>
    </div>
  );
}

export default Classess
