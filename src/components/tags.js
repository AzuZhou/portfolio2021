import React, { useState } from "react"
import styled from "styled-components"

import Tag from "./shared/tag"

import useInterval from "../hooks/useInterval"

import { colors } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const technologies = [
  "HTML5",
  "CSS3",
  "Flexbox",
  "Grid",
  "JavaScript",
  "React",
  "Redux",
  "TypeScript",
  "Gatsby",
]

const Container = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: center;

  ${desktopBreakpoint} {
    justify-content: flex-start;
  }
`

const Tags = () => {
  const [activeTechnology, setActiveTechnology] = useState(0)

  useInterval(() => {
    setActiveTechnology(state =>
      state === technologies.length - 1 ? 0 : state + 1
    )
  }, 1500)

  return (
    <Container>
      {technologies.map((technology, index) => (
        <Tag
          key={technology}
          text={technology}
          color={colors.SUNSET_ORANGE}
          isActive={index === activeTechnology}
        />
      ))}
    </Container>
  )
}

export default Tags
