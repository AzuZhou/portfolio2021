import React from "react"
import VisivilitySensor from "../../visibility-sensor"

import FadeIn from "animations/fade-in"
import VerticalTrail from "animations/vertical-trail"
import HorizontalTrail from "animations/horizontal-trail"
import SlideIn from "animations/slide-in"
import Transition from "animations/transition"

import { Container, Title, TitleContainer, Subtitle, Circle } from "./styled"

const animations = {
  verticalTrail: VerticalTrail,
  horizontalTrail: HorizontalTrail,
  slideIn: SlideIn,
  transition: Transition,
}

const Section = ({
  children,
  title,
  subtitle,
  animation,
  alignment,
  direction,
  fullWidth,
  ...animationProps
}) => {
  const Animation = animation ? animations[animation] || null : null

  // TODO: replace VisibilitySensor with Intersection Observer custom hook and check whether the animation should start from top or bottom

  // TODO: 1. snap point vertically (alt intersectionO to keep track of active section -> scroll to top of the following section if close enough)
  // 2. fade in and out?
  // 3. get scroll direction with VisisbilityS (alt replace intersectionO)
  // 4. change things according to direction
  // TODO: FIX - snap scroll freaking out in Chrome
  return (
    <VisivilitySensor partialVisibility once>
      {({ isVisible }) => (
        <Container
          $alignment={alignment}
          $direction={direction}
          $fullWidth={fullWidth}
        >
          {title && (
            <FadeIn isVisible={isVisible}>
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
                $isSubsection={!title}
              >
                {subtitle}
              </Subtitle>
            </FadeIn>
          )}

          {animation && (
            <Animation
              isVisible={isVisible}
              alignment={alignment}
              {...animationProps}
            >
              {children}
            </Animation>
          )}

          {!animation && <FadeIn isVisible={isVisible}>{children}</FadeIn>}
        </Container>
      )}
    </VisivilitySensor>
  )
}

export default Section
