import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"

import Card from "./shared/card"
import Boxes from "./boxes"

import { colors } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const projects = [
  {
    name: "Movie Search",
    imgUrl: "",
    id: v4(),
  },
]

const Container = styled.div`
  background-color: ${colors.ENGLISH_VIOLET};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Projects = () => (
  <Container>
    <CardContainer>
      <Card title="Projects" alignment="flex-end" animation="fadeIn">
        <Boxes list={projects} />
      </Card>
    </CardContainer>
  </Container>
)

export default Projects
