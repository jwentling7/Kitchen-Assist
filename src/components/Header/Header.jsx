import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as KitchenAssistLogo } from "../../assets/kitchen-assist-logo.svg";
import { Button } from "../Button.style";
import { HeaderContainer, HeaderNavBar, HeaderLink } from "./Header.style";

export default function Header() {
  return (
    <HeaderContainer>
      <KitchenAssistLogo />
      <HeaderNavBar>
        <Link to="/">
          <HeaderLink>
            <Button primary>Search</Button>
          </HeaderLink>
        </Link>
        <Link to="/recipeBook">
          <HeaderLink>
            <Button secondary>My Recipe Book</Button>
          </HeaderLink>
        </Link>
      </HeaderNavBar>
    </HeaderContainer>
  );
}
