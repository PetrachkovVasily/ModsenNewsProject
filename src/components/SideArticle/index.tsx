import * as React from "react"
import { ArticleImg, ArticleInfo, AuthorAndDate, Date, Description, StyledSideArticle, Title } from "./styled"
import content from "@assets/content.jpeg"

function SideArticle() {
  return (
    <StyledSideArticle>
      <ArticleImg src={content} alt="Article Image"/>
      <ArticleInfo>
        <Title>
          U.S. downs suspected Chinese spy balloon
        </Title>
        <Description>
          China called the vessel`s downing “an excessive reaction” and said it “retains the right to respond...
        </Description>
        <AuthorAndDate>
          Craig Bator - <Date>27 Dec 2020</Date>
        </AuthorAndDate>
      </ArticleInfo>
    </StyledSideArticle>
  )
}

export default SideArticle