import * as React from "react"
import { ListElement, ListWrapper } from "./styled"
import { Link } from "react-router-dom"
import { NEWS } from "@constants/notes"
import { MAIN } from "@constants/routsPaths"

function HeaderList() {
  let listElementArray = [NEWS, NEWS, NEWS, NEWS, NEWS]
  return (
    <ListWrapper>
      {
        listElementArray.map((element) => {
          const key = Date.now().toString(36) + Math.random().toString(36);
          return (
            <Link key={key} to={MAIN}>
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