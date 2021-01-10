import React from "react"
import styled from "styled-components"

import Card from "./card"

import { colors } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const Container = styled.div`
  height: 500px;
  background-color: ${colors.SANDY_BROWN};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const Summary = () => (
  <Container>
    <CardContainer>
      <Card title="Summary" />
    </CardContainer>
  </Container>
)

export default Summary
