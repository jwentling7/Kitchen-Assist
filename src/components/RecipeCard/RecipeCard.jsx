import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./RecipeCard.scss";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <div className=" recipe-card__wrapper recipe-card--front">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card__image"
        />
        <div>
          <h3 className="recipe-card__title title--small">{recipe.title}</h3>
          <div className="recipe-card__meta">
            <p>Servings: {recipe.servings}</p>
            <p>Calories per serving: {recipe.totalCalories}</p>
            <p>
              Total time:{" "}
              {recipe.time[0].hours === 0 &&
                recipe.time[0].minutes === 0 &&
                "unknown"}
              {recipe.time[0].hours > 0 && `${recipe.time[0].hours} hour(s)`}{" "}
              {recipe.time[0].minutes > 0 &&
                `${recipe.time[0].minutes} minutes`}
            </p>
          </div>
        </div>
      </div>

      <div className=" recipe-card__wrapper recipe-card--back">
        <h3 className="recipe-card__title title--small">{recipe.title}</h3>
        <h4>Ingredients</h4>
        <ul className="recipe-card__ingredient-list">
          {recipe.ingredients.map((i) => {
            const filtered = i.replace("", "");
            return (
              <li key={uuidv4()} className="recipe-card__ingredient">
                {filtered}
              </li>
            );
          })}
        </ul>
        <span className="btn">
          <a
            href={recipe.url}
            type="text/html"
            rel="noreferrer noopener"
            target="_blank"
          >
            See Full Recipe
          </a>
        </span>{" "}
      </div>
    </div>
  );
}
