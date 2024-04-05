import { redirect } from "next/navigation";
import { IngredientsRecipeSchema } from "./schema";

export const fetchIndividualRecipeLink = async ({ id }: { id: number }) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );

  const data = await res.json();
  return data.sourceUrl;
};

export async function genRecipe(ingredients: string) {
  let tries = 0;
  const res = await fetch("https://ai.arinji.com/completions", {
    method: "POST",
    headers: {
      Authorization: `${process.env.ACCESS_KEY}`,
      SPEED: "FAST",
      "Content-Type": "application/json",
    },
    cache: "force-cache",

    body: JSON.stringify([
      {
        role: "system",
        content:
          "Make sure every response is unique and not similar to previous responses.",
      },
      {
        role: "user",
        content: `I have ${ingredients} in my fridge. I want to make a recipe with these ingredients. Make sure the recipe is healthy and easy to make. You can only use the ingredients I have in my fridge and nothing else. Return the recipe in the following format, a JSON object with the following keys: recipeName, minutesToMake, ingredients, steps, isHealthy, isVegetarian, isGlutenFree. The recipeName is the name of the recipe(Make sure the name is short and concise. Try for a maximum of 5 Words), minutesToMake is the number of minutes it takes to make the recipe, ingredients is a list of ingredients, steps is an array of steps to make the recipe(Explain all the steps in detail). isHealthy is a boolean which is true if the recipe is healthy and false if it is not. isVegetarian is a boolean which is true if the recipe is vegetarian and false if it is not. isGlutenFree is a boolean which is true if the recipe is gluten free and false if it is not. Make sure the response is a VALID JSON OBJECT`,
      },
    ]),
  });

  if (tries === 2) redirect("/");
  try {
    var rawData = await res.json();

    const data = JSON.parse(rawData.message.content);
    const parsed = IngredientsRecipeSchema.parse(data);

    return parsed;
  } catch (e) {
    tries++;
    return await genRecipe(ingredients);
  }
}
