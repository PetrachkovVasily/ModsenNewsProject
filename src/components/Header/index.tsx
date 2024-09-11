import * as React from "react"
import { BurgerMenu, InnerHeader, Logo, StyledHeader } from "./styled"
import HeaderList from "@components/HeaderList"
import logo from "@assets/Logo.svg"
import burger from "@assets/Hamburger Menu.svg"
import { useAppDispatch } from "@hooks/redux"
import { chengeIsOpen } from "@store/reducers/ActionCreator"

function Header() {
  const dispatch = useAppDispatch()

  function handleOpen() {
    dispatch(chengeIsOpen())
  }
  return (
    <StyledHeader>
      <InnerHeader>
        <Logo src={logo} alt="Logo"/>
        <HeaderList/>
        <BurgerMenu onClick={handleOpen} src={burger} alt="Burger" />
      </InnerHeader>
    </StyledHeader>
  )
}

export default Header