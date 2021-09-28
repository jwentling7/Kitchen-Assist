import React, { useState, useRef, useEffect } from "react";
import RecipeCard from "./RecipeCard";

function App() {
  const APP_ID = "";
  const API_KEY = "";
  const BASE_URL = "https://api.edamam.com/search?q=";
  const LOCAL_STORAGE_KEY = "Kitchen-Assist.recipes";

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [recipeBook, setRecipeBook] = useState([]);

  let searchTerm = useRef();

  // Get saved recipes from local storage
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    storedRecipes && setRecipeBook(storedRecipes);
  }, []);

  // Save recipes to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipeBook));
  }, [recipeBook]);

  // Search recipe book for recipe: boolean
  function recipeExists(recipe) {
    return recipeBook.find((r) => r.key === recipe.key) ? true : false;
  }

  // Add Recipe button calls this
  function saveRecipe(newRecipe) {
    if (!recipeExists(newRecipe))
      setRecipeBook((prevRecipeBook) => {
        return [...prevRecipeBook, newRecipe];
      });
  }

  // Delete Recipe button calls this
  function deleteRecipe(recipe) {
    if (recipeExists(recipe)) {
      const newRecipeBook = recipeBook.filter((r) => r.key !== recipe.key);
      setRecipeBook(newRecipeBook);
    }
  }

  // Search (recipe) button calls this
  function handleSearch(event) {
    event.preventDefault();
    fetch(
      `${BASE_URL}${searchTerm.current.value}&app_id=${APP_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const searchResults = data.hits.map((r) => {
          return {
            key: r.recipe.url,
            title: r.recipe.label,
            image: r.recipe.image,
            totalCalories: r.recipe.calories,
            servings: r.recipe.yield,
            ingredients: r.recipe.ingredientLines,
            url: r.recipe.url,
          };
        });
        setSearchedRecipes(searchResults);
      })
      .catch(() => console.error("Error in search recipes."));
  }

  return (
    <>
      <h1>Kitchen Assist</h1>

      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search Recipes</label>
        <input
          type="text"
          name="search"
          ref={searchTerm}
          id="search"
          placeholder="Whatcha searchin' for?"
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {searchedRecipes.map((r) => (
          <div key={r.key}>
            <RecipeCard recipe={r} />
            <button onClick={() => saveRecipe(r)}>Add Recipe</button>
            <button onClick={() => deleteRecipe(r)}>Delete Recipe</button>
            <p>Saved in ___.</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
