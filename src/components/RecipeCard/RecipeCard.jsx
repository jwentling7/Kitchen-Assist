import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useFlipCard } from "../../helper";
import {
  Card,
  CardFront,
  CardBack,
  CardImage,
  Ingredient,
} from "./RecipeCard.style";
import { Button } from "../styles";

export default function RecipeCard({ recipe }) {
  const { isFlipped, flipCard } = useFlipCard();

  return (
    <Card onClick={flipCard} isFlipped={isFlipped}>
      <CardFront>
        <CardImage src={recipe.image} alt={recipe.title} />

        <h3>{recipe.title}</h3>
        <dl>
          <dt>Servings:</dt>
          <dd>{recipe.servings}</dd>

          <dt>Calories per serving:</dt>
          <dd>{recipe.totalCalories}</dd>

          <dt>Total time:</dt>
          <dd>
            {recipe.timeHour === 0 && recipe.timeMinute === 0 && "unknown"}
            {recipe.timeHour > 0 && `${recipe.timeHour} hour(s)`}{" "}
            {recipe.timeMinute > 0 && `${recipe.timeMinute} minutes`}
          </dd>
        </dl>
      </CardFront>

      <CardBack isFlipped={isFlipped}>
        <h3>{recipe.title}</h3>
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((i) => {
            const filtered = i.replace("", "");
            return <Ingredient key={uuidv4()}>{filtered}</Ingredient>;
          })}
        </ul>
        <Button secondary>
          <a
            href={recipe.url}
            type="text/html"
            rel="noreferrer noopener"
            target="_blank"
          >
            See Full Recipe
          </a>
        </Button>
      </CardBack>
    </Card>
  );
}
