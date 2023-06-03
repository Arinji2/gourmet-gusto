export interface RecipeIdGroup {
  results: RecipeId[];
  number: number;
}

export interface RecipeId {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface IngredientsRecipe {
  recipeName: string;
  minutesToMake: string;
  ingredients: string[];
  steps: string[];
  isHealthy: boolean;
  isVegetarian: boolean;
  isGlutenFree: boolean;
}
