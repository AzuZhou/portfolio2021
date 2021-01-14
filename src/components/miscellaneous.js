import React from "react"
import styled from "styled-components"

import Card from "./shared/card"

import { colors } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const Container = styled.div`
  background-color: ${colors.SPACE_CADET};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
`

const Miscellaneous = () => (
  <Container>
    <CardContainer>
      <Card title={"Miscellaneous"} alignment="flex-start" />
    </CardContainer>
  </Container>
)

export default Miscellaneous
