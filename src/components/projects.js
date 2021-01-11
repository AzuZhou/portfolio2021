import React from "react"
import styled from "styled-components"

import Card from "./shared/card"

import { colors } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const Container = styled.div`
  background-color: ${colors.ENGLISH_VIOLET};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
`

const Projects = () => (
  <Container>
    <CardContainer>
      <Card title="Projects" />
    </CardContainer>
  </Container>
)

export default Projects
