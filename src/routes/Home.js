import React from "react";
import { SearchRecipes } from "../components";
import "./Page.scss";

export default function Home() {
  return (
    <div className="page__content">
      <h2 className="page__title title--medium">Search Recipes</h2>
      <SearchRecipes />
    </div>
  );
}
