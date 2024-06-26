import { fetchIndividualRecipeLink } from "@/utils/helperFunctions";
import { RecipeIdGroup } from "@/utils/types";
import RecipeCard from "../recipeCard";
import RedirectButton from "../redirectButton";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { input: string };
}) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      process.env.SPOONACULAR_API_KEY
    }&query=${searchParams.input.toLowerCase()}&number=3`,
    {
      cache: "force-cache",
    }
  );

  const data = (await res.json()) as RecipeIdGroup;
  let links: string[] = [];

  if (data.status !== "failure" && data.results?.length !== 0) {
    links = (await Promise.all(
      data.results.map(async (recipe) => {
        const res = await fetchIndividualRecipeLink({ id: recipe.id });
        return res;
      })
    )) as string[];
  }

  return (
    <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-center bg-bg">
      <h1 className="pt-[150px] font-verdana text-[50px] font-bold text-vibrant md:text-[80px]">
        Recipes
      </h1>
      {data.results?.length === 0 || data.status === "failure" ? (
        <div className="mt-10 flex h-full w-full flex-col items-center justify-center gap-10">
          <p className="text-center text-[30px] font-bold text-white md:text-[50px]">
            {data.status === "failure"
              ? "Something went wrong"
              : "No results found"}
          </p>
        </div>
      ) : (
        <div className="mb-5 flex h-full w-full flex-row flex-wrap items-center justify-evenly gap-5">
          {data.results.map((recipe, i) => (
            <RecipeCard data={recipe} key={recipe.id} link={links[i]} />
          ))}
        </div>
      )}
      <div className="mb-5 h-fit w-fit">
        <RedirectButton />
      </div>
    </div>
  );
}
