import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  width: 390px;
  height: calc(100vh - 80px);
  padding-top: 16px;
  right: calc(-391px);
  top: 80px;
  bottom: 0;
  z-index: 3;
  background-color: ${(props) => props.theme.white};
  box-shadow: -5px 0px 10px ${(props) => props.theme.midGrey};
  transition:
    right 0.3s,
    box-sadow 0.1s;
  display: none;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 698px) {
    display: block;
  }
`;
