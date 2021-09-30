import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, SearchRecipes } from "./components";
import { Home, RecipeBook } from "./routes";

export default function App() {
  return (
    <Router>
      <Header />
      <SearchRecipes />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipeBook" component={() => <RecipeBook />} />
      </Switch>
    </Router>
  );
}
