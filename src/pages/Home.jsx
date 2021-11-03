import React from "react";
import { SearchRecipes, Page, PageTitle } from "../components";

export default function Home() {
  return (
    <Page>
      <PageTitle>Search Recipes</PageTitle>
      <SearchRecipes />
    </Page>
  );
}
