import * as React from "react";

import logo from "@assets/Logo.svg";
import { useAppDispatch } from "@hooks/redux";
import burger from "@assets/Hamburger Menu.svg";
import { HeaderList } from "@components/HeaderList";
import { chengeIsOpen } from "@store/reducers/ActionCreator";

import { BurgerMenu, InnerHeader, Logo, StyledHeader } from "./styled";

export function Header() {
  const dispatch = useAppDispatch();

  function handleOpen() {
    dispatch(chengeIsOpen());
  }
  return (
    <StyledHeader>
      <InnerHeader>
        <Logo src={logo} alt="Logo" />
        <HeaderList />
        <BurgerMenu onClick={handleOpen} src={burger} alt="Burger" />
      </InnerHeader>
    </StyledHeader>
  );
}
