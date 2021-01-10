import React from "react"
import styled from "styled-components"

import Summary from "./summary"
import Skills from "./skills"
import Projects from "./projects"
import Miscellaneous from "./miscellaneous"
import Snake from "./snake"
import Contact from "./contact"

import { colors } from "../styled/constants"

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
    <Snake
      degrees="-175deg"
      firstColor={colors.SANDY_BROWN}
      secondColor={colors.SUNSET_ORANGE}
    />
    <Skills />
    <Snake
      degrees="175deg"
      firstColor={colors.SUNSET_ORANGE}
      secondColor={colors.ENGLISH_VIOLET}
    />
    <Projects />
    <Snake
      degrees="-175deg"
      firstColor={colors.ENGLISH_VIOLET}
      secondColor={colors.SPACE_CADET}
    />
    <Miscellaneous />
    <Snake
      degrees="175deg"
      firstColor={colors.SPACE_CADET}
      secondColor={colors.MAASTRICHT_BLUE}
    />
    <Contact />
  </Container>
)

export default Home
