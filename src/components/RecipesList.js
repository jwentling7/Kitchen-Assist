import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeFunctions from "../helper/RecipeFunctions";

export default function RecipesList(prop) {
  const { saveRecipe, deleteRecipe } = RecipeFunctions();

  return (
    <div>
      {prop.searchedRecipes.map((r) => (
        <div key={r.key}>
          <RecipeCard recipe={r} />
          <button onClick={() => saveRecipe(r)} type="button">
            Add Recipe
          </button>
          <button onClick={() => deleteRecipe(r)} type="button">
            Delete Recipe
          </button>
          <p>Saved in ___.</p>
        </div>
      ))}
    </div>
  );
}
