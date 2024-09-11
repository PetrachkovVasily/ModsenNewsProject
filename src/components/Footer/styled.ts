import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #F0F1F1;
  margin-top: auto;

  @media (max-width: 524px) {
    height: 392px;
    min-height: 392px;
  }

  @media (max-width: 524px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`

export const InnerFooter = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1169px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 100px;

  @media (max-width: 896px) {
    gap: 44px;
  }

  @media (max-width: 524px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 24px;
  }
`