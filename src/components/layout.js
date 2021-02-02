/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import "@fontsource/montserrat/500.css"
import "@fontsource/playfair-display"

import Header from "./header"

import { colors } from "../styled/constants"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
}

body {
  font-family: "Montserrat";
  font-weight: 500;
  margin: 0;
  min-height: 100%;
  display: flex;
  color: ${colors.GREY};
}

#___gatsby, #gatsby-focus-wrapper {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#gatsby-focus-wrapper {
  padding-top: 20px;
  align-items: center;
}

main {
  width: 100%;
  max-width: 1200px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display";
  letter-spacing: 1px;
  margin: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}

p {
  margin: 0;
}

button {
  cursor: pointer;
  border: none;
  padding: 0;
  margin:0;
  outline: none;
  /* TODO: handle outline */
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `AZ`} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
