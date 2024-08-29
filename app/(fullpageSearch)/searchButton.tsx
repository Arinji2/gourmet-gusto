"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchButton({ ingredients }: { ingredients: any[] }) {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  return (
    <button
      disabled={ingredients.length === 0 || clicked}
      className="z-40 mb-3 bg-vibrant rounded-sm h-[62px] w-[188px] flex flex-col items-center justify-center font-verdana text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer md:text-2xl"
      onClick={() => {
        setClicked(true);
        let query = JSON.stringify(ingredients.map((ing) => ing.name));
        query = query.replace("[", "").replace("]", "");

        router.push(`/ingredients/search?input=${query.replaceAll(`"`, ``)}`);
      }}
    >
      {clicked ? (
        <Loader2 strokeWidth={3} className="h-[30px] w-[30px] animate-spin " />
      ) : (
        <p>Search</p>
      )}
    </button>
  );
}

export default SearchButton;
