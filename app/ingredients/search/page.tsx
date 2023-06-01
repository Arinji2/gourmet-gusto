import { genRecipe } from "@/utils/helperFunctions";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { input: string };
}) {
  const res = await genRecipe(searchParams.input);
  
  console.log(res);
  return <div></div>;
}
