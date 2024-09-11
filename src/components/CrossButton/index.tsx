import * as React from "react"
import { StyledButton } from "./styled"
import cross from "@assets/Cross.svg"
import { useAppDispatch, useAppSelector } from "@hooks/redux"
import { chengeIsOpen } from "@store/reducers/ActionCreator"

function CrossButton() {
  const dispatch = useAppDispatch()
  const {isOpen} = useAppSelector(state => state.newsReducer)

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