import React from "react"
import styled from "styled-components"
import VisivilitySensor from "react-visibility-sensor"

import FadeIn from "../animations/fade-in"

import { fontSizes } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const Container = styled.div``

const Title = styled.h2`
  color: white;
  text-shadow: 0px 1px 2px white;
  font-size: ${fontSizes.mobile.subtitle};

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.subtitle};
  }
`

const Card = ({ children, title }) => (
  <VisivilitySensor partialVisibility>
    {({ isVisible }) => (
      <Container>
        <FadeIn isVisible={isVisible}>
          <Title>{title}</Title>
        </FadeIn>

        {children}
      </Container>
    )}
  </VisivilitySensor>
)

export default Card
