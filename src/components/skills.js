import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"

import Section from "./shared/section"

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
  { id: v4(), text: "Git" },
]

const Container = styled.section`
  background-color: ${colors.SUNSET_ORANGE};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Skills = () => (
  <Container>
    <SectionContainer>
      <Section
        title="Skills"
        alignment="flex-start"
        animation="transition"
        color={colors.SUNSET_ORANGE}
      >
        {technologies.map(({ id, text }) => (
          <span key={v4()} id={id}>
            {text}
          </span>
        ))}
      </Section>
    </SectionContainer>
  </Container>
)

export default Skills
