"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import SearchButton from "./searchButton";

export default function Search() {
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState<
    {
      name: string;
      id: number;
    }[]
  >([]);
  const router = useRouter();
  const [animationParent] = useAutoAnimate();
  const inputBox = useRef<HTMLInputElement>(null);
  return (
    <div className="relative flex h-fit w-full snap-center flex-col items-center justify-center gap-10 min-h-[100svh]">
      <Image
        alt="Image"
        fill
        priority
        src="/search.jpg"
        className="fixed top-0 h-[100svh] w-full object-cover"
      />
      <div className="absolute h-full w-full bg-[#1E1E1E] opacity-90"></div>

      <h2 className="z-40 pt-36 text-center font-verdana text-[35px] font-bold text-white md:text-[70px]">
        Ingredients Search
      </h2>
      <div className="mb-5 flex h-full w-full flex-col items-center justify-center md:flex-row">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="flex h-full w-[90%] flex-col items-center justify-center md:w-[60%] relative"
        >
          <p className="text-white/50 text-lg font-medium pb-4">
            Hint: You can put in multiple recipes separated by commas.
          </p>
          <input
            type="text"
            className="z-40 h-fit w-[90%] rounded-lg bg-[#D9D9D9] p-3 font-verdana text-xl font-medium text-bg outline-none md:w-[80%] md:text-4xl"
            placeholder="Carrots (OR) Carrots, Rice, Peas"
            onChange={(e) => setSearch(e.target.value)}
            ref={inputBox}
          />
          <button
            type="submit"
            className="z-40 mt-10 bg-vibrant rounded-sm p-4 pl-12 pr-12 font-verdana text-xl font-bold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer md:text-4xl"
            onClick={() => {
              if (search.length === 0) return;
              let ingredientsList: string[] = [];

              search.split(",").forEach((ingredient) => {
                ingredientsList.push(ingredient.trim());
              });

              console.log(ingredientsList);

              ingredientsList = ingredientsList.filter((ingredient, index) => {
                return ingredientsList.indexOf(ingredient) === index;
              });

              ingredientsList.forEach((ingredient) => {
                setIngredients((prevIngredients) => {
                  if (prevIngredients.some((ing) => ing.name === ingredient))
                    return prevIngredients;
                  return [
                    ...prevIngredients,
                    { name: ingredient, id: Math.random() },
                  ];
                });
              });
              inputBox.current!.value = "";
            }}
          >
            Add
          </button>

          <div className="mb-10 flex h-fit w-fit flex-col items-center justify-center hover:cursor-pointer">
            <Link
              href="/"
              className="z-40 mt-10 font-verdana text-xl font-bold text-vibrant"
            >
              Search With Recipe
            </Link>
            <div className="z-40 h-[4px] w-full rounded-lg bg-white"></div>
          </div>
        </form>
        <div className="flex h-full w-[95%] flex-col items-center justify-center md:w-[40%]">
          <div className="z-40 flex  h-[50svh] w-[90%] flex-col items-center justify-start rounded-lg pb-2 bg-bg">
            <p className="pt-10 font-verdana text-3xl font-bold text-white md:text-4xl">
              Ingredients
            </p>
            <div
              className="hide-scrollbar flex h-[70%] w-full flex-col items-center justify-start gap-4 overflow-y-scroll pt-5"
              ref={animationParent}
            >
              {ingredients.map((ingredient, i) => (
                <div
                  className="flex h-fit w-full flex-row items-center justify-center gap-8"
                  key={i}
                >
                  <p className="font-verdana text-xl font-bold text-white md:text-3xl">{`${i + 1}.`}</p>
                  <div className="h-fit w-[50%] text-left">
                    <p className="line-clamp-1 font-verdana text-lg font-bold text-vibrant md:text-xl">
                      {ingredient.name}
                    </p>
                  </div>
                  <Trash2
                    className="h-[20px] w-[20px] text-red-500 md:h-[30px] md:w-[30px]"
                    onClick={() => {
                      setIngredients(
                        ingredients.filter((ing) => ing.id != ingredient.id)
                      );
                    }}
                  />
                </div>
              ))}
            </div>
            <SearchButton ingredients={ingredients} />
          </div>
        </div>
      </div>
    </div>
  );
}
