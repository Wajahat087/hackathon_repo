import React from 'react'
import Image from 'next/image'

const Herosection = () => {
  return (
    <div className="relative w-full h-[716px]">
      {/* Image with correct dimensions and responsive classes */}
      <Image 
        src="/seat.png" 
        alt="Hero Banner" 
        height={525}
        width={525}
        className="ml-auto mr-14" 
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
        <div className="w-full sm:w-[599px] h-auto gap-[25px] text-center sm:text-left">
          <h5 className="font-montserrat font-bold text-[14px] sm:text-[24px] leading-[20px] sm:leading-[24px] tracking-[0.1px]">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-[40px] sm:text-[60px] leading-[56px] sm:leading-[80px] tracking-[0.2px]">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat font-normal text-[32px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] w-full sm:w-[376px]">
            We know how large objects will act, 
            but things on a small scale.
          </h4>
          <button className="w-full sm:w-auto bg-blue-600 py-[12px] sm:px-[52px] px-[30px] rounded-[5px] gap-[10px] font-montserrat text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;