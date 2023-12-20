import React from "react";
import Avatar from "../../images/Avatar.png";
import Svg from "../../images/more_horiz.svg";
export default function Card({ marginleft, opacity }) {
  return (
    <div
      className={`flex justify-between mb-4 rounded-lg ${marginleft} bg-[#081956] p-4 ${opacity} `}
    >
      <div className="flex ">
        <div>
          <img src={Avatar} alt="" />
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h4 className="font-bold text-white">ShooPharDhie</h4>
          <p className="text-xs text-[#EBEBEB]">Last Online 2 Hour Ago</p>
        </div>
      </div>
      <div>
        <img src={Svg} alt="" />
      </div>
    </div>
  );
}
