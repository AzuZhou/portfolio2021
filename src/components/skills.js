import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"

import Card from "./shared/card"
import Tags from "./tags"

import { colors } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const technologies = [
  { id: v4(), text: "HTML5" },
  { id: v4(), text: "CSS3" },
  { id: v4(), text: "Flexbox" },
  { id: v4(), text: "Grid" },
  { id: v4(), text: "JavaScript" },
  { id: v4(), text: "React" },
  { id: v4(), text: "Redux" },
  { id: v4(), text: "TypeScript" },
  { id: v4(), text: "Gatsby" },
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
