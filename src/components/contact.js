import React from "react"
import styled from "styled-components"

import Card from "./card"

import { colors } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const Container = styled.div`
  background-color: ${colors.MAASTRICHT_BLUE};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const Contact = () => (
  <Container>
    <CardContainer>
      <Card title="Contact" />
    </CardContainer>
  </Container>
)

export default Contact
