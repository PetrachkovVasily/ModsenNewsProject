import BurgerMenu from "@components/BurgerMenu";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainPage from "@pages/MainPage";
import * as React from "react";
import { GlobalStyles } from "./AppStyled";
import ErrorPage from "@pages/ErrorPage";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      {/* <BurgerMenu/> */}
      <Outlet/>
      {/* <ErrorPage/> */}
      <Footer/>
    </>
  )
}

export default App
