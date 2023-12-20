import React from "react";

export default function TextComponent({ title, bio, description }) {
  return (
    <ul className="flex flex-col xl:mt-12 gap-4">
      <li className="text-[#5699FF] font-bold leading-8 ">{title}</li>
      <li className="xl:mb-2">
        <h1 className="text-4xl leading-[56px] text-white font-bold lg:text-5xl lg:leading-[66px] xl:text-6xl xl:leading-[80px]">
          {bio}
        </h1>
      </li>
      <li className="">
        <p className="text-[#EBEBEB] leading-8">{description}</p>
      </li>
    </ul>
  );
}
