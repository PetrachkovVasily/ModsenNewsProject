import styled from "styled-components";

export const StyledTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #2c3144;
`;

export const ArticleHeader = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 39px;

  @media (max-width: 698px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Date = styled.time`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #898989;
`;

export const Author = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
`;
