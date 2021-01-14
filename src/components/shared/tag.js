import React from "react"
import styled from "styled-components"
import { a } from "react-spring"

import { fontSizes } from "../../styled/constants"
import { desktopBreakpoint } from "../../styled/styles"

const Container = styled(a.div)`
  border: 1px solid white;
  font-size: ${fontSizes.mobile.primaryText};
  font-weight: normal;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: ${props => (props.$isActive ? props.$color : "white")};
  background-color: ${props => (props.$isActive ? "white" : props.$color)};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.primaryText};
  }
`

const Tag = ({ text, color, isActive }) => (
  <Container $color={color} $isActive={isActive}>
    {text}
  </Container>
)

export default Tag
