"use client";

import Image from "next/image";
import Link from "next/link";

function SearchMainPage() {
  return (
    <div className="= flex h-[100svh] w-full flex-col items-start justify-center  gap-y-10 bg-bg md:flex-row md:items-center">
      <Link
        href="/ingredients"
        className="group relative mt-10 flex h-[400px] w-full flex-col items-center justify-center gap-10 overflow-hidden hover:cursor-pointer md:mt-0 md:h-full md:w-[50%] md:snap-start"
      >
        <Image
          src="/ingredientsMain.jpg"
          alt="Ingredients"
          fill
          quality={100}
          className="absolute object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
        />
        <div className="absolute h-full w-full bg-bg opacity-70"></div>
        <h1 className="z-20 font-verdana text-[40px] font-bold text-white md:text-[70px]">
          Ingredients
        </h1>
        <h1 className="z-20 font-verdana font-bold text-vibrant md:text-[20px]">
          Search With Ingredients
        </h1>
      </Link>
      <Link
        href="/recipes"
        className="group relative mb-10 flex h-[400px] w-full flex-col items-center justify-center gap-10 overflow-hidden hover:cursor-pointer md:mb-0 md:h-full md:w-[50%] md:snap-start"
      >
        <Image
          src="/recipeMain.jpg"
          alt="Recipes"
          fill
          quality={100}
          className="absolute object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
        />
        <div className="absolute h-full w-full bg-bg opacity-70"></div>
        <h1 className="z-20 font-verdana text-[40px] font-bold text-white md:text-[70px]">
          Recipes
        </h1>
        <h1 className="z-20 font-verdana font-bold text-vibrant md:text-[20px]">
          Search With Recipes
        </h1>
      </Link>
    </div>
  );
}

export default SearchMainPage;
