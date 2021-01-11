import React from "react"
import styled from "styled-components"
import { useTrail, a } from "react-spring"

const Container = styled(a.div)`
  height: 60px;
  overflow: hidden;

  > div {
    overflow: hidden;
  }
`

export default ({ isVisible, children }) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    delay: 300,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : 60,
    height: isVisible ? 60 : 0,
    from: { opacity: 0, x: 60, height: 0 },
  })

  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <Container
          key={index}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
          }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </Container>
      ))}
    </>
  )
}
