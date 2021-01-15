import React from "react"
import styled from "styled-components"
import { desktopBreakpoint } from "../styled/styles"

import Box from "./shared/box"

const Container = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  justify-content: center;

  // TODO: fix grid to so it accepts more than 1 box maintaing flex end

  ${desktopBreakpoint} {
    justify-content: flex-end;
  }
`

const Boxes = ({ list }) => (
  <Container>
    {list.map(({ ...props }) => (
      <Box key={props.id} {...props} />
    ))}
  </Container>
)

export default Boxes
