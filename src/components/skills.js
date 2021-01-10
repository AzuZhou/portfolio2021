import React from "react"
import styled from "styled-components"

import Card from "./card"

import { colors } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const Container = styled.div`
  background-color: ${colors.SUNSET_ORANGE};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
`

const Skills = () => (
  <Container>
    <CardContainer>
      <Card title="Skills" />
    </CardContainer>
  </Container>
)

export default Skills
