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
  { id: v4(), text: "Next" },
  { id: v4(), text: "Git" },
]

const Container = styled.section`
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
  <Container id="skills">
    <SectionContainer>
      <Section
        title="Skills"
        subtitle="Being a self-taught programmer, I relied heavily on platforms such as freeCodeCamp and Udemy, as well as the community around me, to familiarize myself with all these state of the art technologies."
        alignment="flex-start"
        animation="transition"
        color={colors.GREY}
        titleColor={colors.BLUE}
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
