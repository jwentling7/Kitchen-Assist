import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useFlipCard } from "../../helper";
import { Card, CardFront, CardBack, CardImage } from "./RecipeCard.style";
import { Button } from "../Button.style";

export default function RecipeCard({ recipe }) {
  const { isFlipped, flipCard } = useFlipCard();

  return (
    <Card onClick={flipCard}>
      <CardFront isFlipped={isFlipped}>
        <CardImage src={recipe.image} alt={recipe.title} />

        <h3>{recipe.title}</h3>
        <dl>
          <dt>Servings:</dt>
          <dd>{recipe.servings}</dd>

          <dt>Calories per serving:</dt>
          <dd>{recipe.totalCalories}</dd>

          <dt>Total time:</dt>
          <dd>
            {recipe.time[0].hours === 0 &&
              recipe.time[0].minutes === 0 &&
              "unknown"}
            {recipe.time[0].hours > 0 && `${recipe.time[0].hours} hour(s)`}{" "}
            {recipe.time[0].minutes > 0 && `${recipe.time[0].minutes} minutes`}
          </dd>
        </dl>
      </CardFront>

      <CardBack isFlipped={isFlipped}>
        <h3>{recipe.title}</h3>
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((i) => {
            const filtered = i.replace("", "");
            return <li key={uuidv4()}>{filtered}</li>;
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
