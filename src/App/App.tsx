import BurgerMenu from "@components/BurgerMenu";
import Footer from "@components/Footer";
import Header from "@components/Header";
import * as React from "react";
import { GlobalStyles } from "./AppStyled";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { useEffect } from "react";
import { fetchNews } from "@store/reducers/ActionCreator";
import ErrorBoundary from "@components/ErrorBoundary";

function App() {
  const dispatch = useAppDispatch()
  const {currentPage} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews(currentPage))
  }, [currentPage])

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <BurgerMenu/>
      <ErrorBoundary>
        <Outlet/>
      </ErrorBoundary>
      <Footer/>
    </>
  )
}

export default App
