import React from "react";
import RecipeFunctions from "../helper/RecipeFunctions";
import RecipeCard from "../components/RecipeCard";

export default function RecipeBook() {
  const { recipeBook } = RecipeFunctions();
  return (
    <>
      <div>
        <h2>My Recipe Book!</h2>
      </div>
      <div>
        {recipeBook.map((r) => (
          <div key={r.key}>
            <RecipeCard recipe={r} />
          </div>
        ))}
      </div>
    </>
  );
}
