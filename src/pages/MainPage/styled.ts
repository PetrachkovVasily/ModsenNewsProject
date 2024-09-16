import { baseCenterLine, baseColumn } from "@utils/mixins";
import styled from "styled-components";

export const StyledMain = styled.main`
  margin-top: 80px;
  width: 100%;
  ${baseColumn}
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  flex-grow: 1;

  @media (max-width: 698px) {
    padding: 0;
    padding-top: 16px;
    padding-bottom: 26px;
  }
`;

export const ContentWrapper = styled.div`
  ${baseCenterLine}
  width: 100%;
  max-width: 1368px;
  margin-top: 56px;
  margin-bottom: 56px;
  gap: 24px;

  @media (max-width: 698px) {
    margin: 0;
  }
`;

export const NewsWrapper = styled.div`
  padding: 24px;
  outline: 1px solid #dbdbdb;
  width: 47.86vw;
  max-width: 670px;

  @media (max-width: 698px) {
    width: 100%;
    padding: 16px;
    outline: none;
  }
`;

export const SideNewsHider = styled.div`
  width: 34vw;
  max-width: 476px;

  @media (max-width: 698px) {
    display: none;
  }
`;
