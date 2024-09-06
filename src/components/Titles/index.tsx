import * as React from "react"
import { ArticleHeader, Author, Date, Description, StyledTitles } from "./styled"

function Titles() {
  return (
    <StyledTitles>
      <ArticleHeader>
        Qwertyui sddfssdf dfgdfg
      </ArticleHeader>
      <Description>
        <Date>
          20 Sep 2023, 8:00pm
        </Date>
        <Author>
          by Bloomberg News
        </Author>
      </Description>
    </StyledTitles>
  )
}

export default Titles