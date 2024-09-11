import * as React from "react"
import { StyledChips } from "./styled"
import { StringProps } from "@utils/StringProps"
import { CHIPS } from "@constants/notes"

function Chips({publisher}: StringProps) {
  return (
    <StyledChips>
      {CHIPS + publisher}
    </StyledChips>
  )
}

export default Chips