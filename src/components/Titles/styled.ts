import { baseColumn, baseMainHeader } from "@utils/mixins";
import styled from "styled-components";

export const StyledTitles = styled.div`
  ${baseColumn}
  gap: 16px;
  color: ${(props) => props.theme.darkBlue};
`;

export const ArticleHeader = styled.h2`
  ${baseMainHeader}
`;

export const Description = styled.div`
  ${baseColumn}
  gap: 4px;
`;

export const Date = styled.time`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${(props) => props.theme.upGrey};
`;

export const Author = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
`;
