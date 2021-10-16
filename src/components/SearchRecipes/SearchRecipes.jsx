import React from "react";
import useSearchRecipe from "../../helper/SearchRecipeFunctions";
import RecipesList from "../RecipeList/RecipesList";
import { Button } from "../styles/Button.style";
import "./SearchRecipes.scss";

const SearchRecipes = () => {
  const { searchedRecipes, searchRecipe } = useSearchRecipe();

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
        <Button primary type="submit">
          Search Recipes
        </Button>
      </form>
      <RecipesList listType="searchedRecipes" list={searchedRecipes} />
    </>
  );
};

export default SearchRecipes;
