import React from "react"
import styled from "styled-components"
import { useTrail, a } from "react-spring"

const Grid = styled(a.div)`
  overflow: hidden;
  display: grid;
  justify-content: end;
  grid-gap: 20;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    ". . . . d1 d1 d1"
    ". . . . d1 d1 d1"
    "d2 d2 d2 . d1 d1 d1"
    "d2 d2 d2 . . . ."
    "d2 d2 d2 . d3 d3 d3"
    ". . . . d3 d3 d3"
    ". . . . d3 d3 d3";
`

// TODO: make grid dynamic and handle responsive

export default ({ isVisible, children }) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    delay: 300,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 100,
    width: isVisible ? "auto" : 0,
    from: { opacity: 0, y: 100, width: 0 },
  })

  return (
    <Grid>
      {trail.map(({ y, ...rest }, index) => {
        const gridArea = `d${index + 1}`
        return (
          <a.div
            key={items[index].key}
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
