import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipeCard">
      <div className="recipeCard__wrapper">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipeCard__image"
        />
        <h3 className="recipeCard__title">{recipe.title}</h3>
        <div className="recipeCard__meta">
          <p>Servings: {recipe.servings}</p>
          <p>
            Calories per serving:{" "}
            {parseInt(recipe.totalCalories / recipe.servings)}
          </p>
        </div>
        <ul className="recipeCard__ingredient-list">
          {recipe.ingredients.map((i) => (
            <li key={uuidv4()} className="recipeCard__ingredient">
              {i}
            </li>
          ))}
        </ul>
        <p>
          <a
            href={recipe.url}
            type="text/html"
            rel="noreferrer noopener"
            target="_blank"
          >
            See Full Recipe
          </a>
        </p>
      </div>
    </div>
  );
}
