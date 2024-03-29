import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import ThreeD from "../animations/three-d"

import { colors, fontSizes } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const Box = styled.div`
  background-color: white;
  border: 2px solid ${colors.BLUEBERRY};
  width: 260px;
  height: 260px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${desktopBreakpoint} {
    width: 98%;
    height: 98%;
  }
`

const VerticalRectangle = styled.div`
  position: absolute;
  background-color: white;
  height: 102%;
  width: 96%;
`
const HorizontalRectangle = styled.div`
  position: absolute;
  background-color: white;
  height: 96%;
  width: 102%;
`

const ImageContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 98%;
  height: 98%;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    filter: grayscale(1);
  }
`

const Label = styled.div`
  position: absolute;
  z-index: 2;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  font-family: "Playfair Display";
  font-size: ${fontSizes.desktop.primaryText};
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  padding: 10px;
  background-color: ${colors.FRENCH_PINK};
`

const Project = ({ name, link, fluid }) => (
  <ThreeD>
    <Box>
      <VerticalRectangle />
      <HorizontalRectangle />
      <ImageContainer>
        {fluid ? (
          <Img fluid={fluid} alt={name} backgroundColor={"white"} />
        ) : null}
      </ImageContainer>
      <Label>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <Title>{name ?? "coming soon"}</Title>
          </a>
        ) : (
          <Title>{name ?? "coming soon"}</Title>
        )}
      </Label>
    </Box>
  </ThreeD>
)

export default Project
