import React from "react"
import styled from "styled-components"
import { useTrail, a } from "react-spring"

const Container = styled(a.div)`
  & ~ div {
    margin-top: ${props => (props.$gap ? `${props.$gap}px` : 0)};
  }
`

const VerticalTrail = ({ isVisible, gap, children }) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: {
      mass: 5,
      tension: 1000,
      friction: 300,
    },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -100,
    from: { opacity: 0, x: -100 },
    delay: isVisible ? 300 : 0,
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

export default React.memo(
  VerticalTrail,
  (prevProps, nextProps) => prevProps.isVisible === nextProps.isVisible
)
