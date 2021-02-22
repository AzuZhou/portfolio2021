import React, { useRef } from "react"
import styled from "styled-components"
import { useTrail, useChain, useSpring, a } from "react-spring"

import { desktopBreakpoint } from "../styled/styles"

const Grid = styled(a.div)`
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-areas: "d1" "d2" "d3";
  grid-gap: 30px;
  justify-content: center;

  // TODO: make dynamic

  ${desktopBreakpoint} {
    justify-content: end;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, minmax(86px, 1fr));
    grid-template-areas:
      ". . . . d1 d1 d1"
      ". . . . d1 d1 d1"
      "d2 d2 d2 . d1 d1 d1"
      "d2 d2 d2 . . . ."
      "d2 d2 d2 . d3 d3 d3"
      ". . . . d3 d3 d3"
      ". . . . d3 d3 d3";
  }
`

// TODO: make grid dynamic and handle responsive

export default ({ isVisible, children }) => {
  const items = React.Children.toArray(children)

  const springRef = useRef()
  const props = useSpring({
    overflow: isVisible ? "visible" : "hidden",
    ref: springRef,
    config: { duration: 0 },
  })

  const trailRef = useRef()
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 100,
    width: isVisible ? "auto" : 0,
    from: { opacity: 0, y: 100, width: 0 },
    ref: trailRef,
    delay: isVisible ? 300 : 0,
  })

  useChain(isVisible ? [trailRef, springRef] : [springRef, trailRef], [0, 1])

  return (
    <Grid style={props}>
      {trail.map(({ y, ...rest }, index) => {
        const gridArea = `d${index + 1}`

        return (
          <a.div
            key={`${items[index].props.id}-animation`}
            style={{
              ...rest,
              transform: y.interpolate(y => `translate3d(${y}%, 0, 0)`),
              gridArea,
            }}
          >
            {items[index]}
          </a.div>
        )
      })}
    </Grid>
  )
}
