import * as React from "react";

import { CHIPS } from "@constants/notes";
import { StringProps } from "@utils/types/StringProps";

import { StyledChips } from "./styled";

export function Chips({ publisher }: StringProps) {
  return <StyledChips>{CHIPS + publisher}</StyledChips>;
}
