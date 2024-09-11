import * as React from "react"
import { ArticleHeader, Author, Date, Description, StyledTitles } from "./styled"
import { SideArticleProps } from "@utils/SideArticleProps"

function Titles({article}: SideArticleProps) {
  return (
    <StyledTitles>
      <ArticleHeader>
        {article.title}
      </ArticleHeader>
      <Description>
        <Date>
          {article.publishedAt}
        </Date>
        <Author>
          by {article.source.name}
        </Author>
      </Description>
    </StyledTitles>
  )
}

export default Titles