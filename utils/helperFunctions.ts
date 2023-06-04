export const fetchIndividualRecipeLink = async ({ id }: { id: number }) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );

  const data = await res.json();
  return data.sourceUrl;
};

export const genRecipe = async (ingredients: string) => {
  await resetIp();

  const res = await fetch("https://api.pawan.krd/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "force-cache",

    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      max_tokens: 400,
      messages: [
        {
          role: "system",
          content:
            "Make sure every response is unique and not similar to previous responses.",
        },
        {
          role: "user",
          content: `I have ${ingredients} in my fridge. I want to make a recipe with these ingredients. Make sure the recipe is healthy and easy to make. You can only use the ingredients I have in my fridge and nothing else. Return the recipe in the following format, a JSON object with the following keys: recipeName, minutesToMake, ingredients, steps, isHealthy, isVegetarian, isGlutenFree. The recipeName is the name of the recipe(Make sure the name is short and concise. Try for a maximum of 5 Words), minutesToMake is the number of minutes it takes to make the recipe, ingredients is a list of ingredients, steps is an array of steps to make the recipe(Explain all the steps in detail). isHealthy is a boolean which is true if the recipe is healthy and false if it is not. isVegetarian is a boolean which is true if the recipe is vegetarian and false if it is not. isGlutenFree is a boolean which is true if the recipe is gluten free and false if it is not. Make sure the response is a VALID JSON OBJECT`,
        },
      ],
    }),
  });
  var data = await res.json();

  if (data.error !== undefined) {
    await resetIp();
    return data.error.type;
  }

  const jsonData = JSON.parse(data.choices[0].message.content);

  return jsonData;
};

async function resetIp() {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };
    const options = {
      method: "POST",
      headers: headers,
      body: "",
      cache: "no-store",
      next: { revalidate: 0 },
    };
    await fetch("https://api.pawan.krd/resetip", options as any);
    console.log("ip reset");
  } catch (err: any) {
    console.error(`error resetting ip: ${JSON.stringify(err.message)}`);
  }
}
