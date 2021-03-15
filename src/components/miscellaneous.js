import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { a } from "react-spring"

import Section from "./shared/section"

import { colors, fontSizes } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const miscellaneous = [
  {
    id: v4(),
    text: "I need tea to survive",
    imgUrl: "",
  },
  {
    id: v4(),
    text: "I picked up running after watching Run with the Wind",
    imgUrl: "",
  },
  {
    id: v4(),
    text: "My word of the year is... freedom",
    imgUrl: "",
  },
]

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Message = styled(a.div)`
  position: absolute;
  will-change: left, opacity;
  color: white;
  font-size: ${fontSizes.mobile.primaryText};
  background-color: ${colors.BLUEBERRY};
  padding: 10px;
  border-radius: 4px;
  white-space: pre-wrap;
  text-align: left;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.primaryText};
  }
`

const Tail = styled.div`
  position: absolute;
  background: linear-gradient(
    135deg,
    ${colors.BLUEBERRY} 0 50%,
    white 50% 100%
  );
  height: 10px;
  width: 10px;
  bottom: -10px;
`

const Miscellaneous = () => (
  <SectionContainer>
    {/* <Section
        subtitle="Q&A Time"
        alignment="flex-start"
      >
        Flipping card (round, to the right) Q&A

        1. What makes me stand out as a dev: I pay attention to detail, I am highly adaptable, and I work best in a team 
        2. What I value the most: People, flexibility, and money (:
        3. How my friends would describe me: Brave, easy-going, and great listener 
      </Section> */}

    <Section
      title="Miscellaneous"
      subtitle="I would need to film a 24 hour video for it to be a proper About Me so for now let's just roll with these random facts:"
      alignment="flex-start"
      animation="slideIn"
      from="left"
      gap={20}
      height={40}
    >
      {miscellaneous.map(({ id, text }) => (
        <Message key={id} id={id}>
          {text}
          <Tail />
        </Message>
      ))}
    </Section>
  </SectionContainer>
)

export default Miscellaneous
