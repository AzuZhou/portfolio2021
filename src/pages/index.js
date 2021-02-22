import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Summary from "../components/summary"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Miscellaneous from "../components/miscellaneous"
import Contact from "../components/contact"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > section {
    min-height: 200px;
    padding: 60px 30px;

    &:last-child {
      padding-bottom: 0px;
    }

    @media screen and (min-width: 1200px) {
      padding: 80px 0;

      &:last-child {
        padding-bottom: 0px;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <Summary />
      <Skills />
      <Projects />
      <Miscellaneous />
      <Contact />
    </Container>
  </Layout>
)

export default IndexPage
