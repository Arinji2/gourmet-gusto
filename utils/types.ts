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
