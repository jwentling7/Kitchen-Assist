import { useState, useEffect } from "react";

const Routes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  function getRecipes() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
      });
  }

  function createRecipe(recipe) {
    const {
      title,
      image,
      totalCalories,
      timeHour,
      timeMinute,
      servings,
      ingredients,
      url,
    } = recipe;
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image,
        total_calories: totalCalories,
        time_hour: timeHour,
        time_minute: timeMinute,
        servings,
        ingredients,
        url,
      }),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        getRecipes();
      });
  }

  function deleteARecipe(id, title) {
    fetch(`http://localhost:3001/recipes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
      }),
    }).then((response) => {
      getRecipes();
      return response.text();
    });
  }

  return { recipes, getRecipes, createRecipe, deleteARecipe };
};

export default Routes;
