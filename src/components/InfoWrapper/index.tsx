import * as React from "react"
import { Address, ContactInfoWrapper, Contacts, StyledInfoWrapper } from "./styled"

function InfoWrapper() {
  return (
    <StyledInfoWrapper>
      <ContactInfoWrapper>
        <Address>
          Logo Financial Group LLC<br/>
          2024 News. All rights reserved
        </Address>
        <Address>
          2972 Westheimer Rd. Santa Ana,<br/>
          Illinois 85486
        </Address>
      </ContactInfoWrapper>
      <ContactInfoWrapper>
        <Contacts>
          <b>Phone:</b><br/>
          (406) 555-0120
        </Contacts>
        <Contacts>
          <b>Email:</b><br/>
          news@gmail.com
        </Contacts>
      </ContactInfoWrapper>
    </StyledInfoWrapper>
  )
}

export default InfoWrapper