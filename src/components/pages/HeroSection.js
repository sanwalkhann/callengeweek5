import React from "react";
import line from "../../images/line.svg";
import heroImg from "../../images/six faces 1 (4).png";
import TextComponent from "../blocks/TextComponent";
import Buttons from "../buttons/Buttons";
import SecondaryBtn from "../buttons/SecondaryBtn";
import CountUp from 'react-countup';

const HeroTextContent = () => (
  <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="md:max-w-[50%] mb-4 xl:max-w-[65%]">
    <div className="max-w-[80%]">
      <TextComponent
        title={"Welcome to Yorfy"}
        bio={"Now Available, Meet Yorfy NFT Collection ⭐️"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </div>
    <div className="">
      <ul className="flex flex-col gap-2 mb-4 max-w-[90%]">
        <li className="xl:mt-2 lg:mt-5">
          <ul className="text-white flex gap-6">
            <li className="flex flex-col text-3xl leading-[48px] font-bold">
              <CountUp end={546} duration={3} />
              <span className="text-[#EBEBEB] uppercase text-xs leading-6 font-normal">
                nft items
              </span>
            </li>
            <img src={line} alt="" />
            <li className="flex flex-col text-3xl leading-[48px] font-bold text-center">
              <CountUp end={42} duration={3} />
              <span className="text-[#EBEBEB] uppercase text-xs leading-6 font-normal">
                Owners
              </span>
            </li>
            <img src={line} alt="" />
            <li className="flex flex-col text-3xl leading-[48px] font-bold text-center">
              <CountUp end={378} duration={3} />
              <span className="text-[#EBEBEB] uppercase text-xs leading-6 font-normal ">
                Items Sold
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

const HeroImageContent = () => (
  <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className="md:flex flex-col ">
    <div>
      <img src={heroImg} alt="" srcSet="" className="" />
    </div>
    <div className="flex flex-col gap-4 md:flex-row justify-center mt-10 ">
      <Buttons text={"Buy on OpenSea"} padding={"px-5"} />
      <SecondaryBtn text={"Know More"} padding={"px-5"} />
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <div className="mb-24">
      <div className="flex flex-col px-5 ">
        <div className="font-poppins mt-6 md:flex items-center justify-around mx-4">
          <HeroTextContent />
          <HeroImageContent />
        </div>
      </div>
    </div>
  );
}
