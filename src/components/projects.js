import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Section from "./shared/Section"
import Project from "./project"

import { desktopBreakpoint } from "../styled/styles"

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${desktopBreakpoint} {
    width: 80%;
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "projects" }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
              fluid {
                originalName
              }
            }
          }
        }
      }
    }
  `)

  const projects = {
    imdb: {
      id: v4(),
      name: "Movie Search",
      link: "https://hooked-movie-search.netlify.app/",
    },
    bookmark: {
      id: v4(),
      name: "Bookmark landing",
      link: "",
    },
    // {
    //   id: v4(),
    //   // name: "Real-time Chat",
    //   link: "",
    // },
  }

  return (
    <SectionContainer>
      <Section
        title="Projects"
        alignment="flex-end"
        animation="horizontalTrail"
        subtitle="Here are some personal projects I built lately. More to come soon."
      >
        {data?.allFile?.edges &&
          data?.allFile?.edges.map(edge => {
            if (!edge.node.childImageSharp) return null

            const fileName = edge.node.childImageSharp.fluid.originalName
            const info = projects[fileName.split(".")[0]]
            const img = getImage(edge.node.childImageSharp.gatsbyImageData)

            if (!info) return null
            return <Project key={fileName} img={img} {...info} />
          })}
      </Section>
    </SectionContainer>
  )
}

export default Projects
