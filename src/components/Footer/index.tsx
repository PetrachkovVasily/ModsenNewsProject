import React from "react";

import { InfoWrapper } from "@components/InfoWrapper";
import { LogoWrapper } from "@components/LogoWrapper";

import { InnerFooter, StyledFooter } from "./styled";

export function Footer() {
  return (
    <StyledFooter>
      <InnerFooter>
        <InfoWrapper />
        <LogoWrapper />
      </InnerFooter>
    </StyledFooter>
  );
}
