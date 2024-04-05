"use client";

import Image from "next/image";
import Link from "next/link";
import SearchMainPage from "./search/page";

export default function Home() {
  return (
    <div className="main h-[100svh] w-full bg-black md:snap-y md:snap-mandatory  md:overflow-y-scroll">
      <div className="relative flex h-[100svh] w-full flex-col items-center  justify-center md:snap-start">
        <video
          autoPlay
          src={"https://files.catbox.moe/ctbsfl.mp4"}
          muted
          loop
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute h-full w-full bg-[#1E1E1E] opacity-70"></div>
        <div className="flex h-fit w-full flex-col items-center justify-center gap-10 md:w-[70%]">
          <h1 className="z-10 m-3 text-center font-verdana text-[60px] font-bold text-vibrant  md:text-[100px]">
            Gourmet Gusto
          </h1>
          <p className="z-10 text-center font-verdana text-[30px] font-medium text-white">
            Savor. Create. Inspire.
          </p>
          <Link
            href="/search"
            className="z-10 border-4 border-[#F97B22] bg-vibrant p-3 font-verdana text-[25px] font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-vibrant"
          >
            Start Cooking
          </Link>
        </div>
      </div>
      <div className="relative flex h-fit min-h-[100svh] w-full snap-center flex-col items-center justify-center">
        <Image
          src="/screen2.jpg"
          alt="Screen 2"
          fill
          quality={100}
          priority
          className="absolute object-cover"
        />
        <div className="mb-5 mt-10 flex h-fit w-full flex-grow flex-row flex-wrap items-center justify-evenly gap-y-16">
          <div className="intersect-once relative  flex h-[100px] w-[90vw] shrink-0 flex-row items-center justify-evenly rounded-lg opacity-0  shadow-lg shadow-black transition-all  duration-[2000ms] intersect:opacity-100 md:h-[250px]  md:w-[250px] md:flex-col md:justify-center">
            <div className="absolute -top-8 z-20 hidden h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#312F2F] md:flex">
              <p className="font-verdana text-4xl font-bold text-[#7C9070]">
                1
              </p>
            </div>
            <div className="flex h-full w-full flex-row items-center justify-evenly gap-3 rounded-lg bg-bg opacity-80 md:flex-col md:justify-end md:gap-10">
              <div className=" z-20 flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#312F2F] md:hidden">
                <p className="font-verdana text-4xl font-bold text-[#7C9070]">
                  1
                </p>
              </div>
              <Image
                src="/icons/cutlery.svg"
                width={50}
                height={50}
                alt="Pizza"
                className="z-10"
              />
              <div className="flex h-fit w-[90px] flex-col items-center justify-center md:w-fit">
                <h2 className=" z-10 m-3 text-center font-nunito text-[20px] font-bold text-white transition-all duration-700 ease-in-out  md:text-[30px]">
                  Search for a Recipe
                </h2>
              </div>
            </div>
          </div>
          <div className="intersect-once relative  flex h-[140px] w-[90vw] shrink-0 flex-row items-center justify-evenly rounded-lg opacity-0  shadow-lg shadow-black transition-all  duration-[2000ms] intersect:opacity-100 md:h-[250px]  md:w-[250px] md:flex-col md:justify-center">
            <div className="absolute -top-8 z-20 hidden h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#312F2F] md:flex">
              <p className="font-verdana text-4xl font-bold text-[#7C9070]">
                2
              </p>
            </div>
            <div className="flex h-full w-full flex-row items-center justify-evenly gap-3 rounded-lg bg-bg opacity-80 md:flex-col md:justify-end md:gap-10">
              <div className=" z-20 flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#312F2F] md:hidden">
                <p className="font-verdana text-4xl font-bold text-[#7C9070]">
                  2
                </p>
              </div>
              <Image
                src="/icons/egg.svg"
                width={50}
                height={50}
                alt="Pizza"
                className="z-10"
              />
              <div className="flex h-fit w-[90px] flex-col items-center justify-center md:w-fit">
                <h2 className=" z-10 m-3 text-center font-nunito text-[20px] font-bold text-white md:text-[30px]">
                  Select one of the Results
                </h2>
              </div>
            </div>
          </div>

          <div className="intersect-once relative  flex h-[140px] w-[90vw] shrink-0 flex-row items-center justify-evenly rounded-lg opacity-0  shadow-lg shadow-black transition-all  duration-[2000ms] intersect:opacity-100 md:h-[250px]  md:w-[250px] md:flex-col md:justify-center">
            <div className="absolute -top-8 z-20 hidden h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#312F2F] md:flex">
              <p className="font-verdana text-4xl font-bold text-[#7C9070]">
                3
              </p>
            </div>
            <div className="flex h-full w-full flex-row items-center justify-evenly gap-3 rounded-lg bg-bg opacity-80 md:flex-col md:justify-end md:gap-10">
              <div className=" z-20 flex h-[50px] w-[50px] flex-col items-center justify-center rounded-full bg-[#312F2F] md:hidden">
                <p className="font-verdana text-4xl font-bold text-[#7C9070]">
                  3
                </p>
              </div>
              <Image
                src="/icons/pizzaSlice.svg"
                width={50}
                height={50}
                alt="Pizza"
                className="z-10"
              />
              <div className="flex h-fit w-[90px] flex-col items-center justify-center md:w-fit">
                <h2 className=" z-10 m-3 text-center font-nunito text-[20px] font-bold text-white md:text-[30px]">
                  Enjoy your Selected Dish
                </h2>
              </div>
            </div>
          </div>
        </div>
        <p className="z-20 mb-5 bg-[#FEE8B0] p-4 text-center font-nunito text-xl font-bold text-vibrant md:p-8 md:text-6xl">
          3 Steps to Reach Food Heaven
        </p>
      </div>
      <SearchMainPage />
    </div>
  );
}
