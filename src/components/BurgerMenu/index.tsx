import * as React from "react";
import { StyledBurgerMenu } from "./styled";
import { BURGER_ID } from "@constants/notes";
import { SideNewsWrapper } from "@components/SideNewsWrapper";

export function BurgerMenu() {
  return (
    <StyledBurgerMenu id={BURGER_ID}>
      <SideNewsWrapper />
    </StyledBurgerMenu>
  );
}
