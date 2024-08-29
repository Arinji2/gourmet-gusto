import { jsonrepair } from "jsonrepair";
import { IngredientsRecipeSchema } from "./schema";

export const fetchIndividualRecipeLink = async ({ id }: { id: number }) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );

  const data = await res.json();
  return data.sourceUrl;
};

let tries = 0;
const sampleString =
  '{"recipeName":"Chicken Rice Bowl","minutesToMake":30,"ingredients":["Chicken","Rice","Carrots"],"steps":["Cook the rice according to package instructions.","Dice the chicken into bite-sized pieces.","Dice the carrots into small pieces.","Heat a pan over medium heat and add the chicken. Cook until browned on all sides.","Add the carrots to the pan and cook for 5 minutes, or until softened.","Serve the rice in a bowl, top with the chicken and carrots."],"isHealthy":true,"isVegetarian":false,"isGlutenFree":true}';

export async function genRecipe(ingredients: string) {
  if (tries <= 2) {
    const res = await fetch("https://ai.arinji.com/completions", {
      method: "POST",
      headers: {
        Authorization: `${process.env.ACCESS_KEY}`,
        FROM: "GOURMET-GUSTO",
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      body: JSON.stringify([
        {
          role: "user",
          content: `I have ${ingredients} in my fridge. I want to make a recipe with these ingredients. Make sure the recipe is healthy and easy to make. You can only use the ingredients I have in my fridge and nothing else. Return the recipe in the following format: ${sampleString}. ,`,
        },
      ]),
    });

    try {
      const jsonString: string = (await res.json()).message.replace(
        "json ",
        ""
      );

      const repairedObject = jsonrepair(jsonString);

      const parsedObject = JSON.parse(repairedObject);

      const validatedObject = IngredientsRecipeSchema.parse(parsedObject);

      return validatedObject;
    } catch (e) {
      tries++;
      console.log(e);
      return await genRecipe(ingredients);
    }
  } else {
    tries = 0;
    throw new Error("Failed to generate recipe");
  }
}
