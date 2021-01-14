import React, { useState } from "react"
import styled from "styled-components"

import Card from "./shared/card"
import Tags from "./tags"

import { colors } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const technologies = [
  "HTML5",
  "CSS3",
  "Flexbox",
  "Grid",
  "JavaScript",
  "React",
  "Redux",
  "TypeScript",
  "Gatsby",
]

const Container = styled.div`
  background-color: ${colors.SUNSET_ORANGE};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Skills = () => (
  <Container>
    <CardContainer>
      <Card title="Skills" alignment="flex-start" animation="fadeIn">
        <Tags list={technologies} color={colors.SUNSET_ORANGE} />
      </Card>
    </CardContainer>
  </Container>
)

export default Skills
