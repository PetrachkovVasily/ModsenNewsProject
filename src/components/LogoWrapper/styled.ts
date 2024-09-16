import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 351px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 896px) {
    gap: 0;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: fit-content;
  }

  @media (max-width: 524px) {
    justify-content: start;
    gap: 24px;
  }
`;

export const ModsenLogo = styled.img`
  width: 122px;
  height: 32px;

  @media (max-width: 896px) {
    width: 86px;
    height: 22px;
  }
`;

export const Logo = styled.img`
  width: 149px;
  height: 65px;

  @media (max-width: 896px) {
    width: 102px;
    height: 44px;
  }
`;
