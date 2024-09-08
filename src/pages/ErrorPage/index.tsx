import * as React from "react"
import { Description, ErrorCode, HeadersWrapper, StyledMain } from "./styled"

function ErrorPage() {
  return (
    <StyledMain>
      <HeadersWrapper>
        <ErrorCode>
          404
        </ErrorCode>
        <Description>
          OOPS! Page you're looking for doesn't exist. Please use search for help
        </Description>
      </HeadersWrapper>
    </StyledMain>
  )
}

export default ErrorPage