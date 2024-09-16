import { css } from "styled-components";

export const baseColumn = css`
  display: flex;
  flex-direction: column;
`;

export const baseCenterLine = css`
  display: flex;
  justify-content: center;
`;

export const baseButtom = css`
  cursor: pointer;
  background-color: #ffffff;
  ${baseCenterLine}
  align-items: center;
`;
