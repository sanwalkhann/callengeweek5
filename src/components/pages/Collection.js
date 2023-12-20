import React from "react";
import Logo from "../../images/Logo.png";
import TextComponent from "../blocks/TextComponent";
import SecondaryBtn from "../buttons/SecondaryBtn";
import img1 from '../../images/six faces 1 (6).png';
import img2 from '../../images/six faces 1 (8).png';
import img3 from '../../images/six faces 1 (9).png';

const CollectionItem = ({ imgSrc, title }) => (
  <li className="border rounded-lg border-[#1E50FF] p-6 flex flex-col gap-6">
    <img src={imgSrc} alt="" />
    <div className="flex items-center gap-4">
      <img src={Logo} alt="" />
      <h5 className="text-white md:text-2xl font-bold">{title}</h5>
    </div>
  </li>
);

export default function Collection() {
  const collectionItems = [
    { imgSrc: img1, title: "YorNoose #432" },
    { imgSrc: img2, title: "YorHayr #332" },
    { imgSrc: img3, title: "YorMwoth #765" },
  ];

  return (
    <div>
      <div className="px-8 flex flex-col gap-4 xl:gap-8 mt-12">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-center"
        >
          <TextComponent
            title={"Collection"}
            bio={"Yorfy NFT Collections"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
        <div data-aos="flip-right" className="2xl:max-w-[100%] 2xl:mx-auto px-5">
          <ul className="flex gap-7 flex-col md:flex-row xl:gap-28">
            {collectionItems.map((item, index) => (
              <CollectionItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[60%] mx-auto mt-10 md:max-w-[20%]">
        <SecondaryBtn text={"View on OpenSea"} />
      </div>
    </div>
  );
}
