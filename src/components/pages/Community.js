import React from "react";
import TextComponent from "../blocks/TextComponent";
import Button from "../buttons/Buttons";
import Card from "../blocks/Card";

export default function Community() {
  const textComponentProps = {
    title: "Community",
    bio: "Join Our Community and Get Many Benefits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  const discordButtonProps = {
    text: "Join Our Discord",
  };

  const card1Props = {
    marginleft: "",
    opacity: "",
  };

  const card2Props = {
    marginleft: "ml-6",
    opacity: "opacity-70",
  };

  const card3Props = {
    marginleft: "ml-10",
    opacity: "opacity-50",
  };

  return (
    <div className="flex px-3 md:px-10 mt-24 flex-col gap-12 md:flex-row mb-24">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="md:max-w-[50%] flex flex-col gap-6 text-center md:text-left"
      >
        <TextComponent {...textComponentProps} />
        <div className="lg:max-w-[35%] max-w-[55%] mx-auto md:mx-0">
          <Button {...discordButtonProps} />
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="w-[85%] mt-12"
      >
        <Card {...card1Props} />
        <Card {...card2Props} />
        <Card {...card3Props} />
      </div>
    </div>
  );
}
