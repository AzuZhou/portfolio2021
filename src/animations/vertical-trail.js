import React from "react"
import styled from "styled-components"
import { useTrail, a } from "react-spring"

const Container = styled(a.div)`
  & ~ div {
    margin-top: ${props => `${props.$gap}px`};
  }
`

export default ({ isVisible, gap, children }) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    delay: 300,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 100,
    height: isVisible ? "auto" : 0,
    from: { opacity: 0, x: 100, height: 0 },
  })

  return trail.map(({ x, ...rest }, index) => (
    <Container
      $gap={gap}
      key={items[index].key}
      style={{
        ...rest,
        transform: x.interpolate(x => `translate3d(0, ${x}%, 0)`),
      }}
    >
      {items[index]}
    </Container>
  ))
}