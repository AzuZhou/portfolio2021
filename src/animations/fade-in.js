import React from "react"
import styled from "styled-components"
import { useSpring, a } from "react-spring"

const Container = styled(a.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  will-change: opacity;
  flex-direction: inherit;
  align-items: inherit;
`

const FadeIn = ({ isVisible, alignment, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
  })

  return (
    <Container style={props} $alignment={alignment}>
      {children}
    </Container>
  )
}

export default React.memo(
  FadeIn,
  (prevProps, nextProps) => prevProps.isVisible === nextProps.isVisible
)
