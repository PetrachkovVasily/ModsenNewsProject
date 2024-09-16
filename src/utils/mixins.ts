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

export const baseMainHeader = css`
  font-size: 30px;
  font-weight: 700;
  line-height: 39px;

  @media (max-width: 698px) {
    font-size: 26px;
    line-height: 34px;
  }
`;
