import React from "react";
import TextComponent from "../blocks/TextComponent";
import Buttons from "../buttons/Buttons";

export default function Newsletter() {
  const textComponentProps = {
    title: "Newsletter",
    bio: "You Do Not Want to Miss Out on this!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  const inputProps = {
    id: "default-search",
    placeholder: "Your Email",
    required: true,
    className:
      "block py-2 px-4 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 placeholder:text-white focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]",
  };

  return (
    <div className="bg-[#081956] px-4 py-6 md:p-14 mt-10 mx-8 rounded-2xl">
      <div data-aos="fade-left" className="text-center">
        <TextComponent {...textComponentProps} />
      </div>
      <div>
        <form>
          <label
            htmlFor={inputProps.id}
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="flex md:flex-row flex-col px-4 mt-10 gap-4 justify-center">
            <input type="search" {...inputProps} />
            <div className="md:w-[25%] lg:w-[20%] xl:w-[15%] 2xl:w-[10%]">
              <Buttons text={"Submit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
