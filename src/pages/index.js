import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Summary from "../components/summary"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Miscellaneous from "../components/miscellaneous"
import Contact from "../components/contact"

import { sectionPadding } from "../styled/styles"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > section:last-child {
    padding-bottom: 0;
  }
`

const Section = styled.section`
  display: flex;
  justify-content: center;
  ${sectionPadding};
`

const IndexPage = () => (
  <Layout>
    <SEO />

    <Container>
      <Section>
        <Summary />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="miscellaneous">
        <Miscellaneous />
      </Section>

      <Section>
        <Contact />
      </Section>
    </Container>
  </Layout>
)

export default IndexPage
