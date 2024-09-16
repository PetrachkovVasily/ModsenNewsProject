import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );
  z-index: 5;
  position: fixed;
  top: 0;
`;

export const InnerHeader = styled(StyledHeader)`
  height: 80px;
  max-width: 1169px;
  justify-content: space-between;
  background: 00000000;
  padding: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Logo = styled.img`
  width: 79px;
  height: 80px;
`;

export const BurgerMenu = styled.img`
  width: 35px;
  height: 35px;
  display: none;
  cursor: pointer;

  @media (max-width: 698px) {
    display: block;
  }
`;
