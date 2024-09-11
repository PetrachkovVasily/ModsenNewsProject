import * as React from "react"
import { ListElement, ListWrapper } from "./styled"
import { Link } from "react-router-dom"

function HeaderList() {
  let listElementArray = ['News', 'News', 'News', 'News', 'News']
  return (
    <ListWrapper>
      {
        listElementArray.map((element) => {
          const key = Date.now().toString(36) + Math.random().toString(36);
          return (
            <Link key={key} to={''}>
              <ListElement key={key}>{element}</ListElement>
            </Link>
          )
        })
      }
      <ListElement>Contact us</ListElement>
    </ListWrapper>
  )
}

export default HeaderList