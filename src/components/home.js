import React from "react"
import styled from "styled-components"

import Summary from "./summary"
import Skills from "./skills"
import Projects from "./projects"
import Miscellaneous from "./miscellaneous"
import Snake from "./snake"
import Contact from "./contact"

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr;
  /* margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem; */
`

const Home = () => (
  <Container>
    <Summary />
    <Snake />
    <Skills />
    <Snake />
    <Projects />
    <Snake />
    <Miscellaneous />
    <Snake />
    <Contact />
  </Container>
)

export default Home
