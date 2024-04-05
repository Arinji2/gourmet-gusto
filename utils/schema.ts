import z from "zod";
//can be string or number
export const IngredientsRecipeSchema = z.object({
  recipeName: z.string(),
  minutesToMake: z.number().or(z.string()),
  ingredients: z.array(z.string()),
  steps: z.array(z.string()),
  isHealthy: z.boolean(),
  isVegetarian: z.boolean(),
  isGlutenFree: z.boolean(),
});
