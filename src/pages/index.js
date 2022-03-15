import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Summary from "../components/summary"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Miscellaneous from "../components/miscellaneous"
import Contact from "../components/contact"

import { sectionPadding, desktopBreakpoint } from "../styled/styles"

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @supports (scroll-snap-align: start) {
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }
`

const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${sectionPadding};

  overflow: visible;
  scroll-snap-align: start;

  @supports (scroll-snap-align: start) {
    &:not(:first-child) {
      scroll-margin-top: 40px;
    }
  }

  &:first-child {
    padding-top: 80px;
  }

  &:last-child {
    padding-bottom: 0;
  }

  ${desktopBreakpoint} {
    &:first-child {
      padding-top: 160px;
    }

    @supports (scroll-snap-align: start) {
      &:not(:first-child) {
        scroll-margin-top: 80px;
      }
    }
  }
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
