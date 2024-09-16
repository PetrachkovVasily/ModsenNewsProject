import * as React from "react";
import { StyledChips } from "./styled";
import { CHIPS } from "@constants/notes";
import { StringProps } from "@utils/types/StringProps";

export function Chips({ publisher }: StringProps) {
  return <StyledChips>{CHIPS + publisher}</StyledChips>;
}
