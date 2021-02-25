import React from "react"
import styled from "styled-components"
import "@fontsource/montserrat/500.css"

import Section from "./shared/section"

import WorkingLate from "../images/working-late.svg"

import { fontSizes } from "../styled/constants"
import { responsivePadding } from "../styled/styles"

const Container = styled.section`
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-weight: 500;
  }
`

const Name = styled.p`
  font-family: "Playfair Display";
  text-transform: uppercase;
  font-size: ${fontSizes.desktop.primaryText};
`

const Role = styled.p`
  font-family: "Playfair Display";
  text-transform: uppercase;
  font-size: ${fontSizes.desktop.title};
`

const Hero = styled(WorkingLate)`
  margin-top: 40px;
  width: 100%;
`

const Summary = () => (
  <Container>
    <SectionContainer>
      <Section
      // animation="verticalTrail" gap={10}
      >
        <Name>Azucena Zhou</Name>
        <Role>Frontend Developer</Role>
        <Hero />
      </Section>
    </SectionContainer>
  </Container>
)

export default Summary
