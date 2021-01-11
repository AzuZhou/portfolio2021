import React from "react"
import styled from "styled-components"
import VisivilitySensor from "react-visibility-sensor"

import FadeIn from "../../animations/fade-in"
import Trail from "../../animations/trail"

import { fontSizes } from "../../styled/constants"
import { desktopBreakpoint } from "../../styled/styles"

const animations = {
  trail: Trail,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  color: white;
  text-shadow: 0px 1px 2px white;
  font-size: ${fontSizes.mobile.subtitle};
  letter-spacing: 1px;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.subtitle};
  }
`

const Card = ({ children, title, animation }) => {
  const Animation = animation ? animations[animation] || null : null

  return (
    <VisivilitySensor partialVisibility>
      {({ isVisible }) => (
        <Container>
          {title && (
            <FadeIn isVisible={isVisible}>
              <Title>{title}</Title>
            </FadeIn>
          )}

          {animation ? (
            <Animation isVisible={isVisible}>{children}</Animation>
          ) : (
            children
          )}
        </Container>
      )}
    </VisivilitySensor>
  )
}

export default Card
