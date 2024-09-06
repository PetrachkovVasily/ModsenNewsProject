import * as React from "react"
import { BurgerMenu, InnerHeader, Logo, StyledHeader } from "./styled"
import HeaderList from "@components/HeaderList"
import logo from "@assets/Logo.svg"
import burger from "@assets/Hamburger Menu.svg"

function Header() {
  return (
    <StyledHeader>
      <InnerHeader>
        <Logo src={logo} alt="Logo"/>
        <HeaderList/>
        <BurgerMenu src={burger} alt="Logo" />
      </InnerHeader>
    </StyledHeader>
  )
}

export default Header