import * as React from "react";
import { GlobalStyles } from "./AppStyled";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { fetchNews } from "@api/fetchNews";
import { BurgerMenu } from "@components/BurgerMenu";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { StyledHeader } from "@components/ErrorBoundary/styled";

function App() {
  const dispatch = useAppDispatch();
  const { currentPage, error } = useAppSelector((state) => state.newsReducer);

  const memorisedFetch = React.useCallback(() => {
    dispatch(fetchNews(currentPage));
  }, [currentPage]);

  React.useEffect(() => {
    memorisedFetch();
  }, [currentPage]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <BurgerMenu />
      <ErrorBoundary>
        {error == "" ? <Outlet /> : <StyledHeader>{error}</StyledHeader>}
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
