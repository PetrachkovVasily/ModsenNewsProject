import styled from "styled-components";

export const StyledInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 536px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 524px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 524px) {
    gap: 16px;
  }
`

export const Address = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 896px) {
    font-size: 14px;
    line-height: 21px;
  }
`
export const Contacts = styled(Address)`
  @media (max-width: 896px) {
    font-size: 16px;
    line-height: 24px;
  }
`