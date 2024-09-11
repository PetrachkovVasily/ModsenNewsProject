import * as React from "react"
import { useState } from "react"
import { StyledBurgerMenu } from "./styled"
import SideNewsWrapper from "@components/SideNewsWrapper"

function BurgerMenu() {  
  return (
    <StyledBurgerMenu tabIndex="0" id={'sideWrapper'}>
      <SideNewsWrapper/>
    </StyledBurgerMenu>
  )
}

export default BurgerMenu