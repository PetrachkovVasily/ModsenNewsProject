import BurgerMenu from "@components/BurgerMenu";
import Footer from "@components/Footer";
import Header from "@components/Header";
import * as React from "react";
import { GlobalStyles } from "./AppStyled";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { newsSlice } from "@store/reducers/newsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "@store/reducers/ActionCreator";

function App() {
  const dispatch = useAppDispatch()
  const {currentPage, isLoading, error} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews(currentPage))
  }, [currentPage])

  return (
    <>
      <GlobalStyles/>
      <Header/>
      {/* <BurgerMenu/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
