import React, { useState } from "react"
import styled from "styled-components"

import Tag from "./shared/tag"

import useInterval from "../hooks/useInterval"

import { desktopBreakpoint } from "../styled/styles"

const Container = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: center;

  ${desktopBreakpoint} {
    justify-content: flex-start;
  }
`

const Tags = ({ list, color }) => {
  const [activeTag, setActiveTag] = useState(0)

  useInterval(() => {
    setActiveTag(state => (state === list.length - 1 ? 0 : state + 1))
  }, 1500)

  return (
    <Container>
      {list.map((item, index) => (
        <Tag
          key={item.id}
          text={item.text}
          color={color}
          isActive={index === activeTag}
        />
      ))}
    </Container>
  )
}

export default Tags
