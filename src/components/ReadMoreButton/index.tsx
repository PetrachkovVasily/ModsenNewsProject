import * as React from "react";
import { StyledButton } from "./styled";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { switchPage } from "@store/reducers/ActionCreator";

function ReadMoreButton() {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.newsReducer);

  function fetchMoreNews() {
    dispatch(switchPage(currentPage));
  }

  return <StyledButton onClick={fetchMoreNews}>Read more</StyledButton>;
}

export default ReadMoreButton;
