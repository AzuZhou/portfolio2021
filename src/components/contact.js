import React from "react"
import styled from "styled-components"

import Section from "./shared/section"

import { colors } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const Container = styled.section`
  background-color: ${colors.MAASTRICHT_BLUE};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const SectionContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const Contact = () => (
  <Container>
    <SectionContainer>
      <Section />
    </SectionContainer>
  </Container>
)

export default Contact
