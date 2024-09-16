import { baseColumn, baseMainHeader } from "@utils/mixins";
import styled from "styled-components";

export const SideNews = styled.aside`
  padding: 24px;
  outline: 1px solid ${(props) => props.theme.lightGrey};
  width: 100%;
  max-width: 476px;
  ${baseColumn}
  align-items: end;

  @media (max-width: 698px) {
    padding: 16px;
    outline: none;
  }
`;

export const StyledSideNewsWrapper = styled.div`
  ${baseColumn}
  width: 100%;
  color: #2c3144;
`;

export const SideHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeader = styled.h2`
  ${baseMainHeader}
`;
