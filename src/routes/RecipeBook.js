import React from "react";
import RecipeFunctions from "../helper/RecipeFunctions";
import { RecipesList } from "../components";
import "./Page.scss";

export default function RecipeBook() {
  const { recipeBook } = RecipeFunctions();

  return (
    <div className="page__content">
      <h2 className="page__title title--medium">My Recipe Book!</h2>
      <RecipesList searchedRecipes={recipeBook} />
    </div>
  );
}
