import React from "react"
import styled from "styled-components"

import Summary from "./summary"
import Skills from "./skills"
import Projects from "./projects"
import Miscellaneous from "./miscellaneous"
import Contact from "./contact"

const Container = styled.div`
  display: grid;
  /* grid-template-rows: 2fr repeat(3, 3fr) 1fr; */

  > section {
    min-height: 400px;
    padding: 60px 30px;

    @media screen and (min-width: 1200px) {
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
