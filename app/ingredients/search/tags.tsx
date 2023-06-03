"use client";

import { faHeart, faLeaf } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

function Tags({
  isHealthy,
  isGluten,
  isVeg,
}: {
  isHealthy: boolean;
  isGluten: boolean;
  isVeg: boolean;
}) {
  const [isClicked, setIsClicked] = useState("");
  const [clickedColor, setClickedColor] = useState("");
  return (
    <div
      className="relative z-20 flex h-[100px] w-[200px] shrink-0 flex-col items-center justify-start gap-5 overflow-hidden rounded-lg bg-[#312F2F]"
      onMouseLeave={() => setIsClicked("")}
    >
      <p
        className="pt-3 font-verdana text-[20px] font-bold text-white"
        onMouseOver={() => {
          console.log("Run");
        }}
        onMouseLeave={() => {
          console.log("Out");
        }}
      >
        Tags
      </p>
      <div
        className={`${
          isClicked === "" ? "-translate-y-[200px] " : "translate-y-0 "
        }w-full absolute flex  h-full flex-col items-center justify-center gap-5 bg-black transition-all duration-300 ease-in-out`}
      >
        <h4 className="font-verdana text-[20px] font-bold text-white">
          Your Food Is
        </h4>{" "}
        <p className={`${clickedColor}font-verdana text-[15px] font-bold`}>
          {isClicked}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        {isHealthy && (
          <FontAwesomeIcon
            icon={faHeart as IconProp}
            className="h-[30px] w-[30px] text-red-500 hover:cursor-pointer"
            onClick={() => {
              setIsClicked("Healthy");
              setClickedColor("text-red-500 ");
            }}
          />
        )}
        {isGluten && (
          <Image
            src="/icons/gluten.svg"
            alt="Gluten"
            width={30}
            height={30}
            onClick={() => {
              setIsClicked("Gluten Free");
              setClickedColor("text-blue-500 ");
            }}
            className="hover:cursor-pointer"
          />
        )}
        {isVeg && (
          <FontAwesomeIcon
            icon={faLeaf as IconProp}
            className="h-[30px] w-[30px] text-green-500 hover:cursor-pointer"
            onClick={() => {
              setIsClicked("Vegetarian");
              setClickedColor("text-green-500 ");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Tags;
