import React from "react";
import useSearchRecipe from "./SearchRecipeLogic";
import RecipesList from "./RecipesList";
import "./SearchRecipes.scss";

const SearchRecipes = () => {
  const { searchRecipe, searchedRecipes } = useSearchRecipe();

  return (
    <>
      <form onSubmit={searchRecipe} className="search-form">
        <label
          htmlFor="search"
          hidden
          className="search-form__label title--small"
        >
          Search Recipes
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Whatcha searchin' for?"
          autoFocus
          className="search-form__input"
        />
        <button type="submit" className="search-form__btn btn btn--primary">
          Search Recipes
        </button>
      </form>
      <RecipesList searchedRecipes={searchedRecipes} />
    </>
  );
};

export default SearchRecipes;
