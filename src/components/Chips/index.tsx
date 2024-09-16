import * as React from "react";
import { StyledChips } from "./styled";
import { CHIPS } from "@constants/notes";
import { StringProps } from "@utils/types/StringProps";

function Chips({ publisher }: StringProps) {
  return <StyledChips>{CHIPS + publisher}</StyledChips>;
}

export default Chips;
