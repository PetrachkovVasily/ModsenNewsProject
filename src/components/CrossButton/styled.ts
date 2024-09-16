import { baseButtom } from "@utils/mixins";
import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  ${baseButtom}
  display: none;

  @media (max-width: 698px) {
    display: block;
  }
`;
