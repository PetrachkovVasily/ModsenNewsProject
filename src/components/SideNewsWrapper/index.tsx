import * as React from "react";

import { NewsList } from "@components/NewsList";
import { CrossButton } from "@components/CrossButton";
import { ReadMoreButton } from "@components/ReadMoreButton";

import {
  SideHead,
  SideNews,
  StyledHeader,
  StyledSideNewsWrapper,
} from "./styled";

export function SideNewsWrapper() {
  return (
    <SideNews>
      <StyledSideNewsWrapper>
        <SideHead>
          <StyledHeader>More News</StyledHeader>
          <CrossButton />
        </SideHead>
        <NewsList />
      </StyledSideNewsWrapper>
      <ReadMoreButton />
    </SideNews>
  );
}
