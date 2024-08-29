export const maxDuration = 60;
import { genRecipe } from "@/utils/helperFunctions";
import Image from "next/image";
import RedirectButton from "./redirectButton";
import ShareButton from "./shareButton.client";
import Tags from "./tags";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { input: string };
}) {
  const data = await genRecipe(searchParams.input);
  let steps: string[] = [];

  data.steps.forEach((step) => {
    if (step.startsWith("or")) return;
    steps.push(step);
  });

  steps.push("Enjoy your meal!");
  return (
    <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-start bg-black gap-10">
      <div className="fixed top-0 h-[100svh] w-full">
        <Image
          src="/ingredients.jpg"
          alt="Ingredients"
          fill
          quality={100}
          priority
          className="absolute object-cover"
        />
        <div className="absolute h-full w-full bg-[#1E1E1E] opacity-70"></div>
      </div>

      <h1 className="z-20 line-clamp-2 pt-[150px] text-center font-verdana text-[30px] font-bold text-vibrant md:line-clamp-1 md:text-[50px]">
        {data.recipeName}
      </h1>
      <div className="hide-scrollbar z-20 mr-5 py-5 flex h-full w-full flex-row items-center justify-start gap-10 overflow-x-auto overflow-y-hidden md:justify-evenly">
        <div className="z-20 flex h-[100px] w-[200px] shrink-0 flex-col items-center justify-start gap-5 rounded-lg bg-[#312F2F]">
          <p className="pt-3 font-verdana text-[20px] font-bold text-white">
            Time to Make
          </p>
          <p className="pb-3 font-verdana text-[20px] font-bold text-vibrant">
            {data.minutesToMake}:00
          </p>
        </div>
        <div className="z-20 flex h-[100px] w-[200px] shrink-0 flex-col items-center justify-start gap-5 rounded-lg bg-[#312F2F]">
          <p className="pt-3 font-verdana text-[20px] font-bold text-white">
            Steps
          </p>
          <p className="pb-3 font-verdana text-[20px] font-bold text-vibrant">
            {data.steps.length}
          </p>
        </div>
        <div className="z-20 flex h-[100px] w-[200px] shrink-0 flex-col items-center justify-start gap-5 rounded-lg bg-[#312F2F]">
          <p className="pt-3 font-verdana text-[20px] font-bold text-white">
            Ingredients
          </p>
          <p className="pb-3 font-verdana text-[20px] font-bold text-vibrant">
            {data.ingredients.length}
          </p>
        </div>
        <Tags
          isGluten={data.isGlutenFree}
          isHealthy={data.isHealthy}
          isVeg={data.isVegetarian}
        />
      </div>

      <div className="z-20  flex h-full w-[90vw] flex-col items-start justify-start gap-10 md:w-[70vw]">
        {steps.map((step, index) => {
          step = step.substring(0, 1).toUpperCase() + step.substring(1);
          if (!step.endsWith(".")) step = step + ".";
          return (
            <div
              className="flex h-fit w-fit flex-row items-center justify-center gap-3"
              key={index}
            >
              <p className="font-verdana text-lg font-medium text-vibrant md:text-xl">
                {index + 1}.
              </p>
              <p className="font-verdana text-lg font-medium text-white md:text-xl">
                {step}
              </p>
            </div>
          );
        })}
      </div>
      <div className="z-20 flex h-full w-[90vw] flex-col items-start justify-start gap-10 md:w-[70vw]">
        <ShareButton />
      </div>

      <RedirectButton />
    </div>
  );
}
