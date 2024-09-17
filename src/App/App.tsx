import React, { useCallback, useEffect } from "react";

import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";

import { theme } from "@utils/theme";
import { fetchNews } from "@api/fetchNews";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { BurgerMenu } from "@components/BurgerMenu";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { StyledHeader } from "@components/ErrorBoundary/styled";

import { GlobalStyles } from "./AppStyled";

function App() {
  const dispatch = useAppDispatch();
  const { currentPage, error } = useAppSelector((state) => state.newsReducer);

  const memorisedFetch = useCallback(() => {
    dispatch(fetchNews(currentPage));
  }, [currentPage]);

  useEffect(() => {
    memorisedFetch();
  }, [currentPage]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <BurgerMenu />
      <ErrorBoundary>
        {error == "" ? <Outlet /> : <StyledHeader>{error}</StyledHeader>}
      </ErrorBoundary>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
