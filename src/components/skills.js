import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { useStaticQuery, graphql } from "gatsby"

import Image from "./shared/image"
import Section from "./shared/section"

import BugFixing from "../images/fixing-bugs.svg"
import Mobile from "../images/mobile-development.svg"
import Todo from "../images/to-do.svg"

import { desktopBreakpoint } from "../styled/styles"
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
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
  }

  > div {
    width: 260px;
    height: 260px;
    border-radius: 130px;
    overflow: hidden;
    border: 2px dotted ${colors.BLUEBERRY};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02), 0 2px 2px rgba(0, 0, 0, 0.02),
      0 4px 4px rgba(0, 0, 0, 0.02), 0 2px 8px rgba(0, 0, 0, 0.02),
      0 8px 16px rgba(0, 0, 0, 0.02);
    margin: 10px 0;

    @media screen and (min-width: 587px) {
      margin: 10px 20px;
    }

    @media screen and (min-width: 1200px) {
      margin: 0;
    }

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

const ImageContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`

const Skills = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "dev-focus.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)

  return (
    <SectionContainer>
      <Section
        title="Skills"
        alignment="flex-start"
        subtitle="In my career, I have worked on numerous projects, adding features, fixing bugs, and working closely with designers. I have experience with responsive and cross-browser compatible applications and I am confident with my ability to create beautiful websites."
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
        subtitle="Being a self-taught programmer, I rely heavily on platforms such as freeCodeCamp and Udemy, as well as the people around me, to learn, sharpen my skills, and familiarize myself with all these state of the art technologies:"
        alignment="flex-start"
        animation="transition"
      >
        {technologies.map(({ id, text }) => (
          <span key={id} id={id}>
            {text}
          </span>
        ))}
      </Section>

      <Section fullWidth>
        <ImageContainer>
          <Image data={data} alt="Web developer focused on her tasks" />
        </ImageContainer>
      </Section>
    </SectionContainer>
  )
}

export default Skills
