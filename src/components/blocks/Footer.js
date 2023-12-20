import React from "react";
import Logo from "../../images/Logo.png";
import Icon1 from "../../images/footerIcons/Icon.svg";
import Icon2 from "../../images/footerIcons/Icon (1).svg";
import Icon3 from "../../images/footerIcons/Icon (2).svg";
import Icon4 from "../../images/footerIcons/Icon (3).svg";
export default function Footer() {
  return (
    <div className="mx-8 mt-24">
      <div className="flex justify-between max-[380px]:flex-col flex-row max-[380px]:gap-4 ">
        <div className="flex text-white items-center ">
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase ml-2">
            Yorfy
          </span>
        </div>
        <div className="flex gap-4 ">
          <img src={Icon1} alt="" />
          <img src={Icon2} alt="" />
          <img src={Icon3} alt="" />
          <img src={Icon4} alt="" />
        </div>
      </div>
      <hr className="w-full my-6 text-[#1E50FF]" />
      <div className="text-[#EBEBEB] flex justify-between gap-3 md:gap-0 flex-col md:flex-row">
        <p className="">© 2022 Yorfy Template • All Rights Reserved</p>
        <p>Made With Love by Groweb Studio</p>
      </div>
    </div>
  );
}
