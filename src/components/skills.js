import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"

import Section from "./shared/section"

import BugFixing from "../images/fixing-bugs.svg"
import Mobile from "../images/mobile-development.svg"
import Devices from "../images/devices.svg"
import Todo from "../images/to-do.svg"

import VideoStreaming from "../images/video-streaming.svg"
import PieceFitting from "../images/fitting-piece.svg"
import Certification from "../images/certification.svg"

import Focus from "../images/dev-focus.svg"

import { responsivePadding, desktopBreakpoint } from "../styled/styles"
import { colors } from "../styled/constants"

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
  flex-direction: column;
  align-items: flex-start;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    width: 260px;
    height: 260px;
    border-radius: 130px;
    overflow: hidden;
    border: 2px dotted ${colors.BLUEBERRY};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02), 0 2px 2px rgba(0, 0, 0, 0.02),
      0 4px 4px rgba(0, 0, 0, 0.02), 0 2px 8px rgba(0, 0, 0, 0.02),
      0 8px 16px rgba(0, 0, 0, 0.02);

    &:first-child {
      svg {
        height: 300px;
        width: 285px;
      }
    }

    &:nth-child(2) {
      svg {
        height: 260px;
        width: 265px;
      }
    }

    &:last-child {
      svg {
        height: 290px;
        width: 275px;
      }
    }
  }
`

const Hero = styled(Focus)`
  margin-top: 40px;
`

const Skills = () => (
  <Container id="skills">
    <SectionContainer>
      <Section
        title="Skills"
        alignment="flex-start"
        subtitle="In my career, I have been part of numerous projects, adding features, fixing bugs, and working closely with designers. I have experience with responsive and cross-browser compatible applications and I am confident with my ability to create dynamic feeling pages that look just like the design."
        // animation="transition"
      >
        <Items>
          <div>
            <Todo />
          </div>
          <div>
            <Mobile />
          </div>
          <div>
            <BugFixing />
          </div>
        </Items>
      </Section>

      <Section
        subtitle="Being a self-taught programmer, I relied heavily on platforms such as freeCodeCamp and Udemy, as well as the community around me, to familiarize myself with all these state of the art technologies."
        alignment="flex-start"
        animation="transition"
      >
        {technologies.map(({ id, text }) => (
          <span key={id} id={id}>
            {text}
          </span>
        ))}
      </Section>

      <Section>
        <Hero />
      </Section>
    </SectionContainer>
  </Container>
)

export default Skills
