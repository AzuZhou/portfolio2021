import React from "react"
import styled from "styled-components"
import VisivilitySensor from "react-visibility-sensor"

import FadeIn from "../../animations/fade-in"
import Trail from "../../animations/trail"

import { fontSizes } from "../../styled/constants"
import { desktopBreakpoint } from "../../styled/styles"

const animations = {
  trail: Trail,
  fadeIn: FadeIn,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${desktopBreakpoint} {
    width: ${props => (!props.$isCentered ? "50%" : "100%")};
    align-items: ${props =>
      props.$alignment === "flex-start"
        ? props.$alignment
        : props.$alignment === "flex-end"
        ? props.$alignment
        : "center"};
  }
`

const Title = styled.h2`
  text-shadow: 0px 1px 2px white;
  font-size: ${fontSizes.mobile.subtitle};
  letter-spacing: 1px;
  margin-bottom: 40px;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.subtitle};
  }
`

const Card = ({ children, title, animation, alignment }) => {
  const Animation = animation ? animations[animation] || null : null

  return (
    <VisivilitySensor partialVisibility>
      {({ isVisible }) => (
        <Container
          $isCentered={alignment !== "flex-start" && alignment !== "flex-end"}
          $alignment={alignment}
        >
          {title && (
            <FadeIn isVisible={isVisible} alignment={alignment}>
              <Title>{title}</Title>
            </FadeIn>
          )}

          {animation ? (
            <Animation isVisible={isVisible} alignment={alignment}>
              {children}
            </Animation>
          ) : (
            children
          )}
        </Container>
      )}
    </VisivilitySensor>
  )
}

export default Card
