import BurgerMenu from "@components/BurgerMenu";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainPage from "@pages/MainPage";
import * as React from "react";
import { GlobalStyles } from "./AppStyled";
import ErrorPage from "@pages/ErrorPage";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      {/* <BurgerMenu/> */}
      <MainPage/>
      {/* <ErrorPage/> */}
      <Footer/>
    </>
  )
}

export default App
