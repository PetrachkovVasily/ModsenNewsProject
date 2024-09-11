import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 409px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 698px) {
    display: none;
  }
`

export const ListElement = styled.h3`
  font-size: 14px;
  color: #FFFFFF;
  cursor: pointer;
  text-decoration: none;
  font-weight: 300;
  line-height: 21px;

  &:hover {
    color: #FFB366;
  }
`