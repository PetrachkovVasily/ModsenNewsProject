import * as React from "react";

import logo from "@assets/Modsen Logo.svg";
import newsLogo from "@assets/Footer Logo.svg";

import { Logo, ModsenLogo, StyledWrapper } from "./styled";

export function LogoWrapper() {
  return (
    <StyledWrapper>
      <ModsenLogo src={logo} alt="Modsen logo" />
      <Logo src={newsLogo} alt="News logo" />
    </StyledWrapper>
  );
}
