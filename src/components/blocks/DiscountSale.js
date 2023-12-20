import React from "react";

export default function DiscountSale() {
  return (
    <div  className="bg-[#AA00FF] flex mt-7 gap-2 justify-between p-4">
      
      <div data-aos="zoom-in-down">
      </div>
      <ul data-aos="zoom-in-down" className="flex w-[100%] md:w-[50%] justify-around lg:text-3xl lg:font-bold lg:leading-[48px]">
        <li className="text-white font-bold leading-[48px]">Discount Sale</li>
        <li className=" font-bold leading-[48px] text-white bg-transparent text-shad ">
          Up to 40%
        </li>
      </ul>
      <ul data-aos="zoom-in-down" className="hidden md:flex md:w-[50%] md:mx-auto  justify-around lg:text-3xl lg:font-bold lg:leading-[48px]">
        <li className="text-white  font-bold leading-[48px]">Discount Sale</li>
        <li className="font-bold leading-[48px] text-white text-shad">
          Up to 40%
        </li>
      </ul>
    </div>
  );
}
