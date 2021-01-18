import React from "react"
import styled from "styled-components"
import VisivilitySensor from "react-visibility-sensor"

import FadeIn from "../../animations/fade-in"
import Trail from "../../animations/trail"
import Transition from "../../animations/transition"

import { fontSizes } from "../../styled/constants"
import { desktopBreakpoint } from "../../styled/styles"

const animations = {
  trail: Trail,
  fadeIn: FadeIn,
  transition: Transition,
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => props.$direction ?? "column"};
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

const Section = ({
  children,
  title,
  animation,
  alignment,
  direction,
  ...animationProps
}) => {
  const Animation = animation ? animations[animation] || null : null

  return (
    <VisivilitySensor partialVisibility>
      {({ isVisible }) => (
        <Container
          $isCentered={alignment !== "flex-start" && alignment !== "flex-end"}
          $alignment={alignment}
          $direction={direction}
        >
          {title && (
            <FadeIn isVisible={isVisible} alignment={alignment}>
              <Title>{title}</Title>
            </FadeIn>
          )}

          {animation ? (
            <Animation
              isVisible={isVisible}
              alignment={alignment}
              {...animationProps}
            >
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

export default Section
