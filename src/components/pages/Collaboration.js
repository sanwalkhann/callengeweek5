import React from "react";
import TextComponent from "../blocks/TextComponent";
import Logo1 from "../../images/companylogo/Logo (1).png";
import Logo2 from "../../images/companylogo/Logo (2).png";
import Logo3 from "../../images/companylogo/Logo (3).png";
import Logo4 from "../../images/companylogo/Logo (4).png";

const logos = [Logo1, Logo2, Logo3, Logo4];

const CollaborationLogo = ({ logo, index }) => (
  <img key={index} src={logo} alt={`Logo ${index + 1}`} />
);

export default function Collaboration() {
  return (
    <div className="mt-24">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="text-center"
      >
        <TextComponent title={"Collaboration"} bio={"Our Partners"} />
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col max-w-[70%] mx-auto md:flex-row gap-8 lg:max-w-full px-4 xl:gap-10 justify-center items-center"
      >
        {logos.map((logo, index) => (
          <CollaborationLogo key={index} logo={logo} index={index} />
        ))}
      </div>
    </div>
  );
}
