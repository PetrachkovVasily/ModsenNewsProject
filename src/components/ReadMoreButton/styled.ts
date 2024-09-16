import { baseButtom } from "@utils/mixins";
import styled from "styled-components";

export const StyledButton = styled.button`
  ${baseButtom}
  border: 1px solid ${(props) => props.theme.lightOrange};
  color: ${(props) => props.theme.lightOrange};
  width: 148px;
  height: 36px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;
