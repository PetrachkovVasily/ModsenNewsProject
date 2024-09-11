import * as React from "react"
import { ListElement, ListWrapper } from "./styled"

function HeaderList() {
  let listElementArray = ['News', 'News', 'News', 'News', 'News']
  return (
    <ListWrapper>
      {
        listElementArray.map((element) => {
          return (
            <ListElement key={Date.now().toString(36) + Math.random().toString(36)}>{element}</ListElement>
          )
        })
      }
      <ListElement>Contact us</ListElement>
    </ListWrapper>
  )
}

export default HeaderList