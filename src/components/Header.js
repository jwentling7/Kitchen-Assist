import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Kitchen Assist</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipeBook">My Recipe Book</Link>
        </li>
      </ul>
    </div>
  );
}
