import React from "react";

import { BURGER_ID } from "@constants/notes";
import { SideNewsWrapper } from "@components/SideNewsWrapper";

import { StyledBurgerMenu } from "./styled";

export function BurgerMenu() {
  return (
    <StyledBurgerMenu id={BURGER_ID}>
      <SideNewsWrapper />
    </StyledBurgerMenu>
  );
}
