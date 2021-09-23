import React from "react";

export default function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id}>
          <img src={r.image} alt={r.title} />
          <h3>{r.title}</h3>
        </div>
      ))}
    </div>
  );
}
