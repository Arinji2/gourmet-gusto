"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="relative flex h-fit w-full snap-center flex-col items-center justify-center gap-10">
      <Image
        alt="Image"
        fill
        priority
        src="/search.jpg"
        className="fixed top-0 h-[100svh] w-full object-cover"
      />
      <div className="absolute h-full w-full bg-[#1E1E1E] opacity-70"></div>

      <h2 className="z-40 pt-20 text-center font-verdana text-[35px] font-bold text-white md:text-[70px]">
        Recipe Search
      </h2>
      <input
        type="text"
        className="z-40 h-fit w-[90%] rounded-lg bg-[#D9D9D9] p-3 font-verdana text-xl font-medium text-bg outline-none md:w-[80%] md:text-4xl"
        placeholder="Pasta"
        onChange={(e) => setSearch(e.target.value)}
      />
      <p
        className="z-40 mt-10 bg-vibrant p-4 pl-12 pr-12 font-verdana text-xl font-bold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer md:text-4xl"
        onClick={() => {
          if (search.length > 0) router.push(`/recipes/search?input=${search}`);
          else router.push(`/recipes/search?input=Empty`);
        }}
      >
        Search
      </p>

      <div className="mb-10 flex h-fit w-fit flex-col items-center justify-center hover:cursor-pointer">
        <Link
          href="/ingredients"
          className="z-40 mt-10 font-verdana text-xl font-bold text-vibrant"
        >
          Search With Ingredients
        </Link>
        <div className="z-40 h-[4px] w-full rounded-lg bg-white"></div>
      </div>
    </div>
  );
}
