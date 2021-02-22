import React, { useRef } from "react"
import styled from "styled-components"
import { useSpring, a } from "react-spring"

const Container = styled(a.div)`
  will-change: transform;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default ({ children }) => {
  const elementRef = useRef(null)
  const [props, setProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const calc = (x, y, element) => {
    const height = element.offsetHeight
    const width = element.offsetWidth

    return [-(y - height / 2) / 20, (x - width / 2) / 20, 1.1]
  }

  return (
    <Container
      onMouseMove={({ clientX, clientY }) => {
        const element = elementRef.current
        const rect = element.getBoundingClientRect()
        const x = clientX - rect.left
        const y = clientY - rect.top

        return setProps({ xys: calc(x, y, element) })
      }}
      onMouseLeave={() => setProps({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {React.cloneElement(children, {
        ref: elementRef,
      })}
    </Container>
  )
}
