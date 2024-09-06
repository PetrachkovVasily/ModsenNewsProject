import * as React from "react"
import { StyledFooter, InnerFooter } from "./styled"
import InfoWrapper from "@components/InfoWrapper"
import LogoWrapper from "@components/LogoWrapper"

function Footer() {
  return (
    <StyledFooter>
      <InnerFooter>
        <InfoWrapper/>
        <LogoWrapper/>
      </InnerFooter>
    </StyledFooter>
  )
}

export default Footer