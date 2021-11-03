import React from "react";
import { RecipesList, Page, PageTitle } from "../components";

export default function RecipeBook() {
  return (
    <Page>
      <PageTitle>My Recipe Book!</PageTitle>
      <RecipesList listType="recipeBook" />
    </Page>
  );
}
