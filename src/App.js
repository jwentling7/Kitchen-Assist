import React, { useState, useRef } from "react";
import RecipeList from "./RecipeList";

function App() {
  const APP_ID = "";
  const API_KEY = "";
  const baseURL = "https://api.edamam.com/search?q=";

  const [recipes, setRecipes] = useState([]);
  let searchTerm = useRef();

  function handleSearch(event) {
    event.preventDefault();
    fetch(
      `${baseURL}${searchTerm.current.value}&app_id=${APP_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
      })
      .catch(() => console.log("error"));
  }

  return (
    <>
      <h1>Kitchen Assist</h1>

      <form onSubmit={handleSearch}>
        <label for="search">Search Recipes</label>
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
        {recipes.map((r) => (
          <RecipeList
            title={r.recipe.label}
            image={r.recipe.image}
            totalCalories={r.recipe.calories}
            servings={r.recipe.yield}
          />
        ))}
      </div>
    </>
  );
}

export default App;
