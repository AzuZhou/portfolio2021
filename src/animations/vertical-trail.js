import React from "react"
import styled from "styled-components"
import { useTrail, a } from "react-spring"

const Container = styled(a.div)`
  height: ${props => `${props.$lineHeight}px`};
  overflow: hidden;

  > div {
    overflow: hidden;
  }
`

export default ({ isVisible, lineHeight, children }) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    delay: 300,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : lineHeight,
    height: isVisible ? lineHeight : 0,
    from: { opacity: 0, x: lineHeight, height: 0 },
  })

  return trail.map(({ x, height, ...rest }, index) => (
    <Container
      $lineHeight={lineHeight}
      key={items[index].key}
      style={{
        ...rest,
        transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`),
      }}
    >
      <a.div style={{ height }}>{items[index]}</a.div>
    </Container>
  ))
}
