import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeFunctions from "../helper/RecipeFunctions";
import "./RecipesList.scss";

export default function RecipesList(prop) {
  const { saveRecipe, deleteRecipe } = RecipeFunctions();

  return (
    <div className="recipes-list">
      {prop.searchedRecipes.map((r) => (
        <div key={r.key}>
          <RecipeCard recipe={r} />
          <button
            onClick={() => saveRecipe(r)}
            type="button"
            className="recipes-list__btn btn btn--primary"
          >
            Add Recipe
          </button>
          <button
            onClick={() => deleteRecipe(r)}
            type="button"
            className="recipes-list__btn btn btn--secondary"
          >
            Delete Recipe
          </button>
        </div>
      ))}
    </div>
  );
}
