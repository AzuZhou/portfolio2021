import React from "react"
import styled from "styled-components"
import { useSpring, a } from "react-spring"

import { desktopBreakpoint } from "../styled/styles"

const Container = styled(a.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  will-change: opacity;

  ${desktopBreakpoint} {
    justify-content: ${props => props.$alignment};
  }
`

export default ({ isVisible, alignment, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
  })

  return (
    <Container style={props} $alignment={alignment}>
      {children}
    </Container>
  )
}
