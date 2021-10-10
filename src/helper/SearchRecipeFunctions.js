import { useState } from "react";
import Constants from "../constants/Constants";

const useSearchRecipe = () => {
  const { APP_ID, API_KEY, BASE_URL } = Constants();
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const getTotalTime = (totalTime) => {
    const hours = parseInt(totalTime / 60);
    const minutes = totalTime % 60;

    return [{ hours: hours, minutes: minutes }];
  };

  const getCalories = (totalCalories, servings) => {
    return parseInt(totalCalories / servings);
  };

  // Search (recipe) button calls this
  const searchRecipe = (event) => {
    event.preventDefault();
    fetch(
      `${BASE_URL}${event.target.search.value}&app_id=${APP_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const searchResults = data.hits.map((r) => {
          return {
            key: r.recipe.url,
            title: r.recipe.label,
            image: r.recipe.image,
            totalCalories: getCalories(r.recipe.calories, r.recipe.yield),
            time: getTotalTime(r.recipe.totalTime),
            servings: r.recipe.yield,
            ingredients: r.recipe.ingredientLines,
            url: r.recipe.url,
          };
        });
        setSearchedRecipes(searchResults);
      })
      .catch(() => console.error("Error in search recipes."));
  };

  return { searchedRecipes, searchRecipe };
};

export default useSearchRecipe;
