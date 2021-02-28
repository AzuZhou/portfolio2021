import React from "react"
import styled from "styled-components"
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
  background: ${colors.FRENCH_PINK};
  position: absolute;
  z-index: 1;
  width: 98%;
  height: 98%;
  filter: grayscale(1);
`

const Label = styled.div`
  position: absolute;
  z-index: 2;
  width: 98%;
  display: flex;
  align-items: center;

  > div {
    background-color: white;

    &:first-child,
    &:last-child {
      height: 2px;
      width: 100%;
    }
  }
`

const Title = styled.p`
  font-family: "Playfair Display";
  font-size: ${fontSizes.desktop.primaryText};
  text-transform: uppercase;
  font-weight: 500;
  color: ${colors.BLUEBERRY};
  white-space: nowrap;
  padding: 20px 10px;
  background-color: white;
`

const Project = ({ name, link }) => (
  <ThreeD>
    <Box>
      <VerticalRectangle />
      <HorizontalRectangle />
      <ImageContainer></ImageContainer>
      <Label>
        <div />
        {/* <a href={link} target="_blank" rel="noreferrer"> */}
        <Title>{name ?? "coming soon"}</Title>
        {/* </a> */}
        <div />
      </Label>
    </Box>
  </ThreeD>
)

export default Project
