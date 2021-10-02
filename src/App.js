import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, RecipeBook } from "./routes";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipeBook" component={() => <RecipeBook />} />
      </Switch>
    </Router>
  );
}
