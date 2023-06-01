"use client";

import Link from "next/link";

export default function RedirectButton() {
  return (
    <div className="flex h-fit w-fit flex-col items-center justify-center hover:cursor-pointer">
      <Link
        href="/"
        className="z-40 mt-10 font-verdana text-xl font-bold text-vibrant"
      >
        Back to Search
      </Link>
      <div className="z-40 h-[4px] w-full rounded-lg bg-white"></div>
    </div>
  );
}
