import * as React from "react"
import { SideHead, SideNews, StyledHeader, StyledSideNewsWrapper } from "./styled"
import CrossButton from "@components/CrossButton"
import NewsList from "@components/NewsList"
import ReadMoreButton from "@components/ReadMoreButton"

function SideNewsWrapper() {
  return (
    <SideNews>
      <StyledSideNewsWrapper>
        <SideHead>
          <StyledHeader>
            More News
          </StyledHeader>
          <CrossButton/>
        </SideHead>
        <NewsList/>
      </StyledSideNewsWrapper>
      <ReadMoreButton/>
    </SideNews>
  )
}

export default SideNewsWrapper