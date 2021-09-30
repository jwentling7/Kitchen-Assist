import React from "react";
import useSearchRecipe from "./SearchRecipeLogic";
import RecipesList from "./RecipesList";

const SearchRecipes = () => {
  const { searchRecipe, searchedRecipes } = useSearchRecipe();

  return (
    <>
      <form onSubmit={searchRecipe}>
        <label htmlFor="search">Search Recipes</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Whatcha searchin' for?"
        />
        <button type="submit">Search</button>
      </form>
      <RecipesList searchedRecipes={searchedRecipes} />
    </>
  );
};

export default SearchRecipes;
