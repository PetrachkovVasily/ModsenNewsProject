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

  React.useEffect(() => {
    dispatch(fetchNews(currentPage));
  }, [currentPage]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <BurgerMenu />
      <ErrorBoundary>
        {error == "" ? <Outlet /> : <StyledHeader>{error}</StyledHeader>}
        {/* <Outlet /> */}
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
