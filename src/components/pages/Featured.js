import React from "react";
import TextComponent from "../blocks/TextComponent";
import logo from "../../images/Logo.png";
import FeatureImg from "../../images/six_faces_Featured_img.png";
import Buttons from "../buttons/Buttons";

export default function Featured() {
  return (
    <div className=" 2xl:max-w-[100%] 2xl:mx-auto">
      <div className="mt-12 text-center px-5">
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="mx-auto md:max-w-[70%] md:mb-10 lg:max-w-[60%]">
          <TextComponent
            title={"Featured"}
            bio={"Hot Trending On This Week from Yorfy"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div data-aos="flip-right" className="image-section rounded-2xl px-5">
          <ul className="px-4 py-6 flex flex-col md:flex-row md:justify-between lg:justify-around bg-[#081956] gap-8">
            <li className="text-left md:max-w-[30%] md:text-center flex justify-around flex-col md:order-2 lg:max-w-[30%] xl:max-w-[30%] order-2 gap-2">
              <div className="md:flex justify-center">
                <img src={logo} alt="" />
              </div>
              <h1 className="text-white text-2xl font-bold md:text-2xl lg:text-[40px] lg:leading-[56px] lg:max-w-[50%] lg:mx-auto">
                YorEyes #234
              </h1>
              <p className="text-[#EBEBEB] md:text-base xl:max-w-[65%] xl:mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li className="md:max-w-[33%] md:order-2">
              <img src={FeatureImg} alt="" />
            </li>

            <li className="text-left md:max-w-[30%] md:text-center flex justify-around flex-col gap-2 lg:max-w-[25%] order-3">
              <h2 className="text-2xl font-bold text-white md:text-2xl lg:text-[40px] lg:leading-[56px] lg:max-w-[80%] lg:mx-auto">
                Interesting with This Item?
              </h2>

              <p className="text-[#EBEBEB] mb-2 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Buttons text={"Buy on OpenSea"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
