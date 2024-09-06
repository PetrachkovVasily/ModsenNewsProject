import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  width: 390px;
  height: 100%;
  padding-top: 16px;
  right: calc(-391px);
  top: 80px;
  bottom: 0;
  z-index: 3;
  background-color: white;
  box-shadow: -5px 0px 10px #b2b2b2;
  transition: right 0.3s, box-sadow 0.1s;

  @media (max-width: 698px) {
    right: 0;
  }
`