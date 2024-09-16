import * as React from "react";

import cross from "@assets/Cross.svg";
import { useAppDispatch } from "@hooks/redux";
import { chengeIsOpen } from "@store/reducers/ActionCreator";

import { StyledButton } from "./styled";

export function CrossButton() {
  const dispatch = useAppDispatch();

  function handleOpen() {
    dispatch(chengeIsOpen());
  }
  return (
    <StyledButton onClick={handleOpen}>
      <img src={cross} alt="Cross Button" />
    </StyledButton>
  );
}
