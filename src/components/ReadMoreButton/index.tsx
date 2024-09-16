import * as React from "react";

import { switchPage } from "@store/reducers/ActionCreator";
import { useAppDispatch, useAppSelector } from "@hooks/redux";

import { StyledButton } from "./styled";

export function ReadMoreButton() {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.newsReducer);

  function fetchMoreNews() {
    dispatch(switchPage(currentPage));
  }

  return <StyledButton onClick={fetchMoreNews}>Read more</StyledButton>;
}
