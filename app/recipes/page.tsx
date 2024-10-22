import Link from "next/link";
import { getRecipes } from "@/../../libs/client";

export default async function StaticPage() {
    const { contents }  = await getRecipes();
  
    if (!contents) {
      return <h1>No Contents</h1>;
    }
  
    return (
      <>
        <div>
            <ul>
                {contents.map((recipe) => (
                <li key={recipe.id}>
                    <Link href={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </li>
                ))}
            </ul>
        </div>
      </>
    );
}