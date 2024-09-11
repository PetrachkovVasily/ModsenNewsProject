import * as React from "react"
import { StyledButton } from "./styled"
import { useAppDispatch, useAppSelector } from "@hooks/redux"
import { switchPage } from "@store/reducers/ActionCreator"

function ReadMoreButton() {
  
  const dispatch = useAppDispatch()
  const {currentPage, error} = useAppSelector(state => state.newsReducer)

  function fetchMoreNews() {    
    console.log('z');
    
    dispatch(switchPage(currentPage))
    console.log('x');
  }

  return (
    <StyledButton onClick={fetchMoreNews}>
      Read more
    </StyledButton>
  )
}

export default ReadMoreButton