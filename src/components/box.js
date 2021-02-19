import React from "react"
import styled from "styled-components"
import ThreeD from "../animations/three-d"

import { colors } from "../styled/constants"

const Container = styled.div`
  background-color: white;
  border: 2px solid ${colors.SECONDHAND_GREY};
  color: white;
  width: 260px;
  height: 260px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Box = ({ name }) => (
  <ThreeD>
    <Container>
      <VerticalRectangle />
      <HorizontalRectangle />
      {name}
    </Container>
  </ThreeD>
)

export default Box
