import * as React from "react";
import { StyledBurgerMenu } from "./styled";
import SideNewsWrapper from "@components/SideNewsWrapper";
import { BURGER_ID } from "@constants/notes";

function BurgerMenu() {
  return (
    <StyledBurgerMenu id={BURGER_ID}>
      <SideNewsWrapper />
    </StyledBurgerMenu>
  );
}

export default BurgerMenu;
