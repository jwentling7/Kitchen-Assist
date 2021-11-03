import { useState, useEffect } from "react";
import Routes from "../routes/routes";

const RecipeFunctions = () => {
  const { recipes, getRecipes, createRecipe, deleteARecipe } = Routes();
  const [recipeBook, setRecipeBook] = useState([]);

  useEffect(() => {
    setRecipeBook(recipes);
  }, [recipes]);

  // Search recipe book for recipe: boolean
  function recipeExists(recipe) {
    const storedRecipes = recipes;
    if (storedRecipes.length > 1) {
      return storedRecipes.find((r) => r.url === recipe.url) ? true : false;
    } else {
      return storedRecipes.url === recipe.url ? true : false;
    }
  }

  // Add Recipe button calls this
  const saveRecipe = (newRecipe) => {
    !recipeExists(newRecipe) && createRecipe(newRecipe);
  };

  // Delete Recipe button calls this
  const deleteRecipe = (recipe) => {
    // console.log(recipe.id);
    recipeExists(recipe) && deleteARecipe(recipe.id, recipe.title);
    getRecipes();
  };

  // Get list type for recipe list
  const getList = (listType, list) => {
    switch (listType) {
      case "recipeBook":
        return recipeBook;
      case "searchedRecipes":
        return list;
      default:
        return "basicList";
    }
  };

  return {
    recipeBook,
    setRecipeBook,
    recipeExists,
    saveRecipe,
    deleteRecipe,
    getList,
  };
};

export default RecipeFunctions;
