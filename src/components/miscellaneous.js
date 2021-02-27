import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { a } from "react-spring"

import Section from "./shared/section"

import { colors, fontSizes } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

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

// TODO: handle responsive

const Miscellaneous = () => (
  <Container id="miscellaneous">
    <SectionContainer>
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
  </Container>
)

export default Miscellaneous
