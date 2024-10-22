import { getDetail,getRecipes } from "@/../../libs/client";
import Link from "next/link"

export async function generateStaticParams(){
  const { contents } = await getRecipes();

  const paths = contents.map((recipe)=>{
    return {
      recipeId: recipe.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params : { recipeId },
}: {
  params: { recipeId : string};
}) {
  const recipe = await getDetail(recipeId);

  return(
    <>
        <p>{recipe.title}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${recipe.title}`,
          }}
        />
    </>
  )
}
