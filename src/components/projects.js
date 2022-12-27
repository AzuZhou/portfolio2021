import React from "react"
import styled from "styled-components"
import { v4 } from "uuid"
import { useStaticQuery, graphql } from "gatsby"

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
  //             fluid(maxWidth: 400) {
  //               ...GatsbyImageSharpFluid
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
    query {
      imdbImage: file(relativePath: { eq: "projects/imdb.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bookmarkImage: file(relativePath: { eq: "projects/bookmark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const projects = [
    {
      id: v4(),
      name: "Movie Search",
      img: data?.imdbImage?.childImageSharp?.fluid,
      link: "https://hooked-movie-search.netlify.app/",
    },
    {
      id: v4(),
      name: "Bookmark Landing",
      img: data?.bookmarkImage?.childImageSharp?.fluid,
      link: "https://bookmark-landing-akqa.vercel.app/",
    },
    {
      id: v4(),
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
        {projects.map(({ id, img, ...props }) => (
          <Project key={id} id={id} fluid={img} {...props} />
        ))}
      </Section>
    </SectionContainer>
  )
}

export default Projects
