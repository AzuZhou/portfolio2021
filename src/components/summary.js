import React from "react"
import styled from "styled-components"
import "@fontsource/montserrat/500.css"
import Image from "../images/working-late.svg"
import Section from "./shared/section"

import { fontSizes } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

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

const Text = styled.p`
  display: none;
  padding-top: 10px;
  font-size: ${fontSizes.desktop.secondaryText};

  ${desktopBreakpoint} {
    display: initial;
  }
`

const Hero = styled(Image)`
  margin-top: 40px;
`

const Summary = () => (
  <Container>
    <SectionContainer>
      <Section
      // animation="verticalTrail" gap={10}
      >
        <Name>Azucena Zhou</Name>
        <Role>Frontend Developer</Role>

        {/* <Text>
          "I describe my job as finding the balance between different aspects of
          software development so that the quality of the outcome stays
          consistent"
        </Text> */}
        <Hero />
      </Section>
    </SectionContainer>
  </Container>
)

export default Summary
