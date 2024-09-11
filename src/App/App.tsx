import BurgerMenu from "@components/BurgerMenu";
import Footer from "@components/Footer";
import Header from "@components/Header";
import * as React from "react";
import { GlobalStyles } from "./AppStyled";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { useEffect } from "react";
import { fetchNews } from "@store/reducers/ActionCreator";
import Loader from "@components/Loader";

function App() {
  const dispatch = useAppDispatch()
  const {currentPage, isLoading} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews(currentPage))
  }, [currentPage])

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <BurgerMenu/>
      {!isLoading ? <Outlet/> : <Loader/>}
      <Footer/>
    </>
  )
}

export default App
