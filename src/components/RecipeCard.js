import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./RecipeCard.scss";

export default function RecipeCard({ recipe }) {
  const { cardSide, setCardSide } = useState(0);
  const hours = parseInt(recipe.time / 60);
  const minutes = recipe.time % 60;

  const timeMessage = () => {
    if (recipe.time === 0) {
      return "unknown";
    } else {
      if (hours === 0) {
        return `${minutes} minutes`;
      } else if (minutes === 0) {
        return `${hours} hour(s)`;
      } else {
        return `${hours} hour(s) and ${minutes} minutes`;
      }
    }
  };

  const caloriesMessage = () => {
    return parseInt(recipe.totalCalories / recipe.servings);
  };

  const flipCard = () => {
    if (cardSide === 0) {
      setCardSide(1);
    } else {
      setCardSide(0);
    }
    console.log("hi");
  };

  useEffect(() => {
    const card = document.querySelector(".recipe-card");
    card.addEventListener("click", flipCard);
    return () => {
      card.removeEventListener("click", flipCard);
    };
  }, []);

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
            <p>Calories per serving: {caloriesMessage()}</p>
            <p>Total time: {timeMessage()}</p>
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
