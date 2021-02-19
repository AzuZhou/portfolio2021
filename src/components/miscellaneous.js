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
    text: "I am vegan and I love ramen",
    imgUrl: "",
  },
  {
    id: v4(),
    text: "I picked up running after watching Run with the Wind",
    imgUrl: "",
  },
  {
    id: v4(),
    text: "My word of the year is: Freedom",
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

const Note = styled(a.div)`
  position: absolute;
  white-space: nowrap;
  will-change: left, opacity;
  color: ${colors.SECONDHAND_GREY};
  text-align: center;
  font-size: ${fontSizes.mobile.primaryText};

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.primaryText};
  }
`

// TODO: handle responsive

const Miscellaneous = () => (
  <Container id="miscellaneous">
    <SectionContainer>
      <Section
        title="Miscellaneous"
        alignment="flex-start"
        animation="slideIn"
        from="left"
        gap={20}
        height={40}
        titleColor={colors.BLUE}
      >
        {miscellaneous.map(({ id, text }) => (
          <Note key={v4()} id={id}>
            {text}
          </Note>
        ))}
      </Section>
    </SectionContainer>
  </Container>
)

export default Miscellaneous
