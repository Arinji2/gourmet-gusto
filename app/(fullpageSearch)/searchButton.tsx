"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
/*const [ingredients, setIngredients] = useState([
    {
      name: "",
      id: 0,
    },
  ]);
  */
function SearchButton({ ingredients }: { ingredients: any[] }) {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  return (
    <div
      className="z-40 mb-3 bg-vibrant p-4 pl-12 pr-12 font-verdana text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer md:text-2xl"
      onClick={() => {
        setClicked(true);
        const query = JSON.stringify(ingredients.map((ing) => ing.name));
        if (query.length > 0)
          router.push(
            `/ingredients/search?input=${query
              .substring(4, query.length - 1)
              .replaceAll(`"`, ``)}`
          );
        else router.push(`/ingredients/search?input=Carrots,Rice`);
      }}
    >
      {clicked ? (
        <Loader2 className="h-[40px] w-[40px] animate-spin " />
      ) : (
        <p>Search</p>
      )}
    </div>
  );
}

export default SearchButton;
