import { useState, useEffect } from "react";
import Constants from "../constants/Constants";

const RecipeFunctions = () => {
  const { LOCAL_STORAGE_KEY } = Constants();
  const [recipeBook, setRecipeBook] = useState([]);

  // Get saved recipes from local storage
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    storedRecipes && setRecipeBook(storedRecipes);
  }, []);

  // Search recipe book for recipe: boolean
  const recipeExists = (recipe) => {
    return recipeBook.find((r) => r.key === recipe.key) ? true : false;
  };

  // Add Recipe button calls this
  const saveRecipe = (newRecipe) => {
    if (!recipeExists(newRecipe)) {
      const newRecipeBook = [...recipeBook, newRecipe];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipeBook));
      setRecipeBook(newRecipeBook);
    }
  };

  // Delete Recipe button calls this
  const deleteRecipe = (recipe) => {
    if (recipeExists(recipe)) {
      const newRecipeBook = recipeBook.filter((r) => r.key !== recipe.key);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipeBook));
      setRecipeBook(newRecipeBook);
    }
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
