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
  text-transform: uppercase;
  color: ${colors.FRENCH_PINK};
  mix-blend-mode: color-dodge;
  display: flex;
  justify-content: center;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.subtitle};
  }

  @media screen and (min-width: 1200px) {
    color: ${colors.BLUEBERRY};
  }
`

const Circle = styled.div`
  display: none;
  position: absolute;
  height: 150px;
  width: 150px;
  ${props => props.$to}: -75px;
  top: -75px;
  z-index: -1;
  background-color: ${colors.FRENCH_PINK};
  border-radius: 75px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08),
    0 4px 4px rgba(0, 0, 0, 0.08), 0 6px 8px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1200px) {
    display: initial;
  }
`

const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
`

const Subtitle = styled.p`
  margin-bottom: ${props => (props.$extraMargin ? "100px" : "40px")};
  margin-top: ${props => (props.$isSubsection ? "40px" : 0)};
  font-size: ${fontSizes.mobile.primaryText};
  color: ${colors.SECONDHAND_GREY};
  text-align: center;
  line-height: 30px;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.primaryText};
    text-align: ${props => props.$textAlign ?? "initial"};
  }
`

const Section = ({
  children,
  title,
  subtitle,
  animation,
  alignment,
  direction,
  titleColor,
  extraMargin,
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
                <Circle $to={alignment === "flex-start" ? "left" : "right"} />
                <Title>{title}</Title>
              </TitleContainer>
            </FadeIn>
          )}

          {subtitle && (
            <FadeIn isVisible={isVisible}>
              <Subtitle
                $textAlign={alignment === "flex-start" ? "left" : "right"}
                $extraMargin={extraMargin}
                $isSubsection={!title}
              >
                {subtitle}
              </Subtitle>
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
