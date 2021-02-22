import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"

import Section from "./shared/section"
import Project from "./project"

import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const projects = [
  {
    name: "Movie Search",
    imgUrl: "",
    id: v4(),
    link: "",
  },
  {
    // name: "Real-time Chat",
    imgUrl: "",
    id: v4(),
    link: "",
  },
  {
    // name: "Instagram Clone",
    imgUrl: "",
    id: v4(),
    link: "",
  },
]

const Container = styled.section`
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Projects = () => (
  <Container id="projects">
    <SectionContainer>
      <Section
        title="Projects"
        alignment="flex-end"
        animation="horizontalTrail"
        subtitle="Here are some personal projects I built lately. More to come soon."
        extraMargin
      >
        {projects.map(({ id, ...props }) => (
          <Project key={id} id={id} {...props} />
        ))}
      </Section>
    </SectionContainer>
  </Container>
)

export default Projects
