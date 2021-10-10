import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as KitchenAssistLogo } from "../../assets/kitchen-assist-logo.svg";
import { Button } from "../Button.style";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <KitchenAssistLogo className="header__logo" />
      <ul className="header__nav-bar">
        <Link to="/">
          <li className="header__link">
            <Button primary>Search</Button>
          </li>
        </Link>
        <Link to="/recipeBook">
          <li className="header__link">
            <Button secondary>My Recipe Book</Button>
          </li>
        </Link>
      </ul>
    </div>
  );
}
