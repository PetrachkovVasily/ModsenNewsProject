import * as React from "react";

import { Loader } from "@components/Loader";
import { useAppSelector } from "@hooks/redux";
import { Article } from "@components/Article";
import { SideNewsWrapper } from "@components/SideNewsWrapper";

import {
  ContentWrapper,
  NewsWrapper,
  SideNewsHider,
  StyledMain,
} from "./styled";

function MainPage() {
  const { isLoading } = useAppSelector((state) => state.newsReducer);

  return (
    <StyledMain>
      <ContentWrapper>
        <NewsWrapper>{!isLoading ? <Article /> : <Loader />}</NewsWrapper>
        <SideNewsHider>
          <SideNewsWrapper />
        </SideNewsHider>
      </ContentWrapper>
    </StyledMain>
  );
}

export default MainPage;
