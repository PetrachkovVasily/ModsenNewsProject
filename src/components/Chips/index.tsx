import * as React from "react"
import { StyledChips } from "./styled"
import { StringProps } from "@utils/StringProps"

function Chips({publisher}: StringProps) {
  return (
    <StyledChips>
      {'News  >  ' + publisher}
    </StyledChips>
  )
}

export default Chips