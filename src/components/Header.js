import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as KitchenAssistLogo } from "../assets/kitchen-assist-logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      {/* <h1 className="header__title title--large">Kitchen Assist</h1> */}
      <KitchenAssistLogo className="header__logo" />
      <ul className="header__nav-bar">
        <Link to="/">
          {" "}
          <li className="header__link btn btn--primary">Search</li>
        </Link>
        <Link to="/recipeBook">
          {" "}
          <li className="header__link btn btn--secondary">My Recipe Book</li>
        </Link>
      </ul>
    </div>
  );
}
