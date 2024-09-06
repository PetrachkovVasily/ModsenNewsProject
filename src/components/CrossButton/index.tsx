import * as React from "react"
import { StyledButton } from "./styled"
import cross from "@assets/Cross.svg"

function CrossButton() {
  return (
    <StyledButton>
      <img src={cross} alt="Cross Button" />
    </StyledButton>
  )
}

export default CrossButton