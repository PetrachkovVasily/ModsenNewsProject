import styled from "styled-components";

export const SideNews = styled.aside`
  padding: 24px;
  outline: 1px solid #dbdbdb;
  width: 100%;
  max-width: 476px;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 698px) {
    padding: 16px;
    outline: none;
  }
`;

export const StyledSideNewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #2c3144;
`;

export const SideHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeader = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 39px;

  @media (max-width: 698px) {
    font-size: 26px;
    line-height: 34px;
  }
`;
