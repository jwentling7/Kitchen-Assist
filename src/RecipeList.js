import React from "react";

export default function RecipeList({ title, image, totalCalories, servings }) {
  return (
    <div key={title}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Servings: {servings}</p>
      <p>Total Calories: {parseInt(totalCalories)}</p>
      <p>Calories per serving: {parseInt(totalCalories / servings)}</p>
    </div>
  );
}
