import React, { useState, useRef } from "react";
import RecipeList from "./RecipeList";

function App() {
  const API_KEY = "";
  const baseURL = "https://api.spoonacular.com/recipes/complexSearch?query=";

  const [recipes, setRecipes] = useState([]);
  let searchTerm = useRef();

  function handleSearch(event) {
    event.preventDefault();
    fetch(`${baseURL}${searchTerm.current.value}&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.results);
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

      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
