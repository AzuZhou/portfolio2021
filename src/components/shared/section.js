import React from "react"
import styled from "styled-components"
import VisivilitySensor from "react-visibility-sensor"

import FadeIn from "../../animations/fade-in"
import VerticalTrail from "../../animations/vertical-trail"
import HorizontalTrail from "../../animations/horizontal-trail"
import SlideIn from "../../animations/slide-in"
import Transition from "../../animations/transition"

import { fontSizes, colors } from "../../styled/constants"
import { desktopBreakpoint } from "../../styled/styles"

const animations = {
  verticalTrail: VerticalTrail,
  horizontalTrail: HorizontalTrail,
  fadeIn: FadeIn,
  slideIn: SlideIn,
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
    width: 100%;
    align-items: ${props =>
      props.$alignment === "flex-start"
        ? props.$alignment
        : props.$alignment === "flex-end"
        ? props.$alignment
        : "center"};
  }
`

const Title = styled.h2`
  font-size: ${fontSizes.mobile.subtitle};
  margin-bottom: 60px;
  text-transform: uppercase;
  color: ${props => props.$color ?? colors.GREY};
  mix-blend-mode: color-dodge;
  display: flex;
  justify-content: center;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.subtitle};
  }
`

const Square = styled.div`
  display: none;
  position: absolute;
  height: 150px;
  width: 150px;
  ${props => props.$to}: -75px;
  top: -75px;
  z-index: -1;
  background-color: ${props => props.$background};
  border-radius: 4px;

  @media screen and (min-width: 1199px) {
    display: initial;
  }
`

const TitleContainer = styled.div`
  position: relative;
`

const Section = ({
  children,
  title,
  animation,
  alignment,
  direction,
  titleColor,
  ...animationProps
}) => {
  const Animation = animation ? animations[animation] || null : null

  return (
    <VisivilitySensor partialVisibility>
      {({ isVisible }) => (
        <Container $alignment={alignment} $direction={direction}>
          {title && (
            <FadeIn isVisible={isVisible} alignment={alignment}>
              <TitleContainer>
                {titleColor && (
                  <Square
                    $background={
                      titleColor === colors.PINK ? colors.BLUE : colors.PINK
                    }
                    $to={titleColor === colors.PINK ? "right" : "left"}
                  />
                )}
                <Title $color={titleColor}>{title}</Title>
              </TitleContainer>
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
