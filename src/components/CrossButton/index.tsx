import * as React from "react"
import { StyledButton } from "./styled"
import cross from "@assets/Cross.svg"
import { useAppDispatch } from "@hooks/redux"
import { chengeIsOpen } from "@store/reducers/ActionCreator"

function CrossButton() {
  const dispatch = useAppDispatch()

  function handleOpen() {
    dispatch(chengeIsOpen())
  }
  return (
    <StyledButton onClick={handleOpen}>
      <img src={cross} alt="Cross Button" />
    </StyledButton>
  )
}

export default CrossButton