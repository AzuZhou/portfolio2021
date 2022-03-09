import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Section from "./shared/section"
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
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(
  //       filter: {
  //         relativeDirectory: { eq: "projects" }
  //         extension: { eq: "png" }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           childImageSharp {
  //             gatsbyImageData
  //             fluid {
  //               originalName
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // TODO: dynamically assign images

  const data = useStaticQuery(graphql`
    {
      imdbImage: file(relativePath: { eq: "projects/imdb.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const projects = [
    {
      id: v4(),
      name: "Movie Search",
      // fileName: "imbd.png",
      img: getImage(data.imdbImage),
      link: "https://hooked-movie-search.netlify.app/",
    },
    {
      id: v4(),
      // name: "Real-time Chat",
      link: "",
    },
    {
      id: v4(),
      // name: "Instagram Clone",
      link: "",
    },
  ]

  return (
    <SectionContainer>
      <Section
        title="Projects"
        alignment="flex-end"
        animation="horizontalTrail"
        subtitle="Here are some personal projects I built lately. More to come soon."
      >
        {projects.map(({ id, img, ...props }) => {
          return <Project key={id} id={id} img={img} {...props} />
        })}
      </Section>
    </SectionContainer>
  )
}

export default Projects
