import * as React from "react";
import { ListElement, ListWrapper } from "./styled";
import { Link } from "react-router-dom";
import { NEWS } from "@constants/notes";
import { MAIN } from "@constants/routsPaths";

export function HeaderList() {
  let listElementArray = [
    { title: NEWS, key: 1 },
    { title: NEWS, key: 2 },
    { title: NEWS, key: 3 },
    { title: NEWS, key: 4 },
    { title: NEWS, key: 5 },
  ];
  return (
    <ListWrapper>
      {listElementArray.map((element) => {
        return (
          <Link key={element.key} to={MAIN}>
            <ListElement key={element.key}>{element.title}</ListElement>
          </Link>
        );
      })}
      <ListElement>Contact us</ListElement>
    </ListWrapper>
  );
}
