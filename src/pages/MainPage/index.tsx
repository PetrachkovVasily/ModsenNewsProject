import * as React from "react"
import { ContentWrapper, NewsWrapper, SideNewsHider, StyledMain } from "./styled"
import Article from "@components/Article"
import SideNewsWrapper from "@components/SideNewsWrapper"

function MainPage() {
  return (
    <StyledMain>
      <ContentWrapper>
        <NewsWrapper>
          <Article/>
        </NewsWrapper>
        <SideNewsHider>
          <SideNewsWrapper/>
        </SideNewsHider>
      </ContentWrapper>
    </StyledMain>
  )
}

export default MainPage