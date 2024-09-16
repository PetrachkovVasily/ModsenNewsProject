import { baseColumn } from "@utils/mixins";
import styled from "styled-components";

export const StyledMain = styled.main`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  ${baseColumn}
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  flex-grow: 1;
`;

export const HeadersWrapper = styled.section`
  ${baseColumn}
  align-items: center;
  gap: 15px;
`;

export const ErrorCode = styled.h1`
  font-size: 192px;
  font-weight: 500;
  line-height: 240px;
  text-align: center;
  color: #f17900;
`;

export const Description = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`;
