import * as React from "react"
import { Logo, ModsenLogo, StyledWrapper } from "./styled"
import logo from "@assets/Modsen Logo.svg"
import newsLogo from "@assets/Footer Logo.svg"

function LogoWrapper() {
  return (
    <StyledWrapper>
      <ModsenLogo src={logo} alt="Modsen logo" />
      <Logo src={newsLogo} alt="News logo" />
    </StyledWrapper>
  )
}

export default LogoWrapper