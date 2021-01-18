import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { a } from "react-spring"

import Section from "./shared/section"

import { colors } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const miscellaneous = [
  {
    id: v4(),
    text: "I am vegan and I love ramen",
    imgUrl:
      "https://www.feastingathome.com/wp-content/uploads/2012/11/vegan-ramen-13.jpg",
  },
  {
    id: v4(),
    text: "I picked up running after watching Run with the Wind",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  },
  {
    id: v4(),
    text: "My word of the year is: Freedom",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  },
]

const Container = styled.section`
  background-color: ${colors.SPACE_CADET};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const SectionContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
`

const Note = styled(a.div)`
  position: absolute;
  left: -100%;
  white-space: nowrap;
`

const Miscellaneous = () => (
  <Container>
    <SectionContainer>
      <Section
        title={"Miscellaneous"}
        alignment="flex-start"
        animation="transition"
      >
        {miscellaneous.map(({ id, text }) => (
          <Note id={id} key={v4()}>
            {text}
          </Note>
        ))}
      </Section>
    </SectionContainer>
  </Container>
)

export default Miscellaneous
