"use client";

import { RecipeId } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({
  data,
  link,
}: {
  data: RecipeId;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-[200px] w-[90vw] flex-col items-center justify-center overflow-hidden rounded-lg bg-black shadow-lg shadow-black md:w-[300px]"
    >
      <Image
        src={data.image}
        alt={data.title}
        fill
        quality={100}
        className="absolute  object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
      />
      <div className="absolute  h-full w-full bg-bg opacity-50"></div>
      <h4 className="z-20 ml-3 line-clamp-2 text-center font-verdana text-[20px] font-bold text-white">
        {data.title}
      </h4>
    </a>
  );
}
