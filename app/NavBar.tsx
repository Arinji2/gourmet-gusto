"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const main = document.querySelector(".main");

    if (window.innerWidth > 768 && main) {
      main.addEventListener("scroll", () => {
        setScroll(main.scrollTop > 70);
      });
    } else {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 30);
      });
    }
  }, []);
  return (
    <div
      className={`${
        scroll ? "bg-black bg-opacity-50 " : "bg-transparent "
      }fixed top-0 z-[1000] flex h-[120px] w-full flex-row items-center justify-center transition-all duration-300 ease-in-out`}
    >
      <Link
        href="/"
        className={`${
          nav
            ? "bg-black md:bg-transparent "
            : scroll
              ? "bg-black md:bg-transparent "
              : " bg-transparent md:bg-transparent "
        }flex h-full w-full flex-row items-start justify-between pt-10 transition-all  duration-300 ease-in-out md:w-[30%] md:justify-center`}
      >
        <Image
          src="/logo.svg"
          width={200}
          height={100}
          alt="Logo"
          className="object-fit z-[1000] ml-4 md:ml-0"
          quality={100}
          priority
          loading="eager"
        />
        {nav ? (
          <X
            className="z-[300000] mr-4 h-[40px] w-[40px] text-vibrant transition-all duration-500 ease-in-out md:hidden"
            onClick={() => setNav(!nav)}
          />
        ) : (
          <Menu
            className="z-[300000] mr-4 h-[40px] w-[40px] text-vibrant transition-all duration-500 ease-in-out md:hidden"
            onClick={() => setNav(!nav)}
          />
        )}
      </Link>
      <div
        className={`fixed top-0  flex h-[100vh] w-full md:hidden ${
          nav
            ? " translate-y-[0px] transition-all duration-300 ease-in-out "
            : " -translate-y-[1000px] transition-all duration-300 ease-in-out "
        } flex-col items-center justify-end bg-transparent transition-all duration-300 ease-in-out`}
      >
        <div className="flex h-[calc(100vh-90px)] w-full flex-col items-center justify-center gap-10 bg-black transition-all duration-300 ease-in-out">
          <Link
            href="/ingredients"
            className="group flex h-fit w-fit flex-col items-center justify-center"
            onClick={() => setNav(false)}
          >
            <h2 className="font-verdana text-3xl font-bold text-white">
              Ingredients
            </h2>
            <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>{" "}
          </Link>
          <Link
            href="/recipes"
            className="group flex h-fit w-fit flex-col items-center justify-center"
            onClick={() => setNav(false)}
          >
            <h2 className="font-verdana text-3xl font-bold text-white">
              Recipes
            </h2>
            <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>{" "}
          </Link>
          <Link
            onClick={() => setNav(false)}
            href="/search"
            className="z-10 border-4 border-[#F97B22] bg-white p-3 font-verdana text-[20px] font-bold text-vibrant transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-vibrant hover:text-white"
          >
            Start Cooking
          </Link>
        </div>
      </div>
      <div className="hidden h-full w-[40%] md:block">
        <div className="flex h-full w-full flex-row items-center justify-evenly">
          <Link
            href="/ingredients"
            className="group flex h-fit w-fit flex-col items-center justify-center"
          >
            <h2 className="font-verdana text-3xl font-bold text-white">
              Ingredients
            </h2>
            <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>{" "}
          </Link>
          <Link
            href="/recipes"
            className="group flex h-fit w-fit flex-col items-center justify-center"
          >
            <h2 className="font-verdana text-3xl font-bold text-white">
              Recipes
            </h2>
            <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>{" "}
          </Link>
        </div>
      </div>
      <div className="hidden h-full w-[30%] flex-col  items-center justify-center md:flex">
        <Link
          href="/search"
          className="z-10 border-4 border-[#F97B22] bg-white p-3 font-verdana text-[20px] font-bold text-vibrant transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-vibrant hover:text-white"
        >
          Start Cooking
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
