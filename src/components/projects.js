import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"

import Section from "./shared/section"
import Box from "./box"

import { colors } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const projects = [
  {
    name: "Movie Search",
    imgUrl: "",
    id: v4(),
  },
  {
    name: "Real-time Chat",
    imgUrl: "",
    id: v4(),
  },
  {
    name: "Instagram Clone",
    imgUrl: "",
    id: v4(),
  },
]

const Container = styled.section`
  background-color: ${colors.ENGLISH_VIOLET};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Projects = () => (
  <Container>
    <SectionContainer>
      <Section
        title="Projects"
        alignment="flex-end"
        animation="horizontalTrail"
      >
        {projects.map(props => (
          <Box key={props.id} {...props} />
        ))}
      </Section>
    </SectionContainer>
  </Container>
)

export default Projects
