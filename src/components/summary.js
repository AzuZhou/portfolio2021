import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "./shared/image"
import "@fontsource/montserrat/500.css"

import Section from "./shared/section"

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

const ImageContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`

const Summary = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "working-late.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <SectionContainer>
        <Section
        // animation="verticalTrail" gap={10}
        >
          <Name>Azucena Zhou</Name>
          <Role>Frontend Developer</Role>
          <ImageContainer>
            <Image data={data} />
          </ImageContainer>
        </Section>
      </SectionContainer>
    </Container>
  )
}

export default Summary
