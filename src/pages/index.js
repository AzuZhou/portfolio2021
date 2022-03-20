import React, { useEffect, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Summary from "../components/summary"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Miscellaneous from "../components/miscellaneous"
import Contact from "../components/contact"

import { Container, Section } from "styled/styled"

const handleIntersect = entries => {
  for (const entry of entries) {
    // TODO: FIX - scroll snap causing intersection twice
    const { isIntersecting, intersectionRatio: ratio } = entry
    // if target > viewport => intersectionRatio is 0 || is out of viewport
    if ((ratio === 0 && isIntersecting) || !isIntersecting) {
      console.log("FULLY INSIDE OR OUTSIDE")
      // if target somewhat overlaps with viewport
    } else if (ratio > 0.1) {
      console.log("PARTIALLY INSIDE")
    }
  }
}

const options = {
  root: null,
  rootMargin: "0px", // it doesn't work unless I assign a root element
  threshold: [0.1],
}

const getObserver = ref => {
  let observer = ref.current
  const isInitialLoad = observer === null
  if (!isInitialLoad) return observer

  let newObserver = new IntersectionObserver(handleIntersect, options)
  ref.current = newObserver
  return newObserver
}

// TODO: make 2 observers, one for sroll up (0.9) and one for scroll down (0.1)

const IndexPage = () => {
  const observer = useRef(null)
  const targets = useRef([])
  const addNode = node => {
    if (!targets.current.includes(node) && node !== null)
      targets.current.push(node)
  }

  useEffect(() => {
    // if (observer.current) observer.current.disconnect()

    const newObserver = getObserver(observer)

    let currentTargets
    if (targets.current) {
      currentTargets = targets.current
      for (const target of currentTargets) {
        newObserver.observe(target)
      }
    }

    return () => newObserver.disconnect()
  }, [])

  return (
    <Layout>
      <SEO />

      <Container>
        <Section ref={addNode}>
          <Summary />
        </Section>

        <Section id="skills" ref={addNode}>
          <Skills />
        </Section>

        <Section id="projects" ref={addNode}>
          <Projects />
        </Section>

        <Section id="miscellaneous" ref={addNode}>
          <Miscellaneous />
        </Section>

        <Section ref={addNode}>
          <Contact />
        </Section>
      </Container>
    </Layout>
  )
}

export default IndexPage
