import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"

import Section from "./shared/section"
import Project from "./project"

import OuterSpace from "../images/outer-space.svg"

import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const projects = [
  {
    name: "Movie Search",
    imgUrl: "",
    id: v4(),
    text: [
      "What I wanted to make. What I wanted to make. What I wanted to make.",
      "Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies.",
      "Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced.",
      "What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt.",
    ],
    repoLink: "",
    projectLink: "",
  },
  {
    name: "Real-time Chat",
    imgUrl: "",
    id: v4(),
    text: [
      "What I wanted to make. What I wanted to make. What I wanted to make.",
      "Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies.",
      "Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced.",
      "What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt.",
    ],
    repoLink: "",
    projectLink: "",
  },
  {
    name: "Instagram Clone",
    imgUrl: "",
    id: v4(),
    text: [
      "What I wanted to make. What I wanted to make. What I wanted to make.",
      "Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies. Why these technologies.",
      "Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced. Challenges I faced.",
      "What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt. What I learnt.",
    ],
    repoLink: "",
    projectLink: "",
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

const Hero = styled(OuterSpace)`
  margin-top: 100px;
  width: 100%;
`

const Projects = () => (
  <Container id="projects">
    <SectionContainer>
      <Section
        title="Projects"
        alignment="flex-end"
        animation="horizontalTrail"
        subtitle="In my career, I have been part of numerous projects, adding features, fixing bugs, and working closely with designers. I have experience with responsive and cross-browser compatible applications and I am confident with my ability to create dynamic feeling pages that look just like the design."
        extraMargin
      >
        {projects.map(({ id, ...props }, index) => {
          const reverse = !Number.isInteger(index / 2)

          return <Project key={v4()} id={id} reverse={reverse} {...props} />
        })}
      </Section>
      <Section>
        <Hero />
      </Section>
    </SectionContainer>
  </Container>
)

export default Projects
