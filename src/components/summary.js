import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/montserrat/500.css"

import Image from "./shared/image"
import Section from "./shared/Section"

import { fontSizes } from "../styled/constants"

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

const ImageContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`

const Summary = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "working-late.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <SectionContainer id="summary">
      <Section animation="verticalTrail" gap={10} direction="column-reverse">
        <Name>Azucena Zhou</Name>
        <Role>Frontend Developer</Role>
      </Section>

      <Section fullWidth>
        <ImageContainer>
          <Image
            data={data}
            alt="Frontend developer on her computer late at night"
          />
        </ImageContainer>
      </Section>
    </SectionContainer>
  )
}

export default Summary
