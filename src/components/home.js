import React from "react"
import styled from "styled-components"

import Summary from "./summary"
import Skills from "./skills"
import Projects from "./projects"
import Miscellaneous from "./miscellaneous"
import Contact from "./contact"

import { desktopBreakpoint } from "../styled/styles"

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr repeat(3, 3fr) 2fr;

  > section {
    padding: 60px 0;

    ${desktopBreakpoint} {
      padding: 80px 0;
    }
  }
`

const Home = () => (
  <Container>
    <Summary />
    <Skills />
    <Projects />
    <Miscellaneous />
    <Contact />
  </Container>
)

export default Home
