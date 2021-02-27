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
import "@fontsource/montserrat"
import "@fontsource/playfair-display"

import Header from "./header"

import { colors } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  font-family: "Montserrat";
  margin: 0;
  min-height: 100%;
  display: flex;
  color: ${colors.SECONDHAND_GREY};
}

#___gatsby, #gatsby-focus-wrapper {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#gatsby-focus-wrapper {
  align-items: center;
}

main {
  width: 100%;
  max-width: 1200px;
  margin-top: 68px;

  ${desktopBreakpoint} {
    margin-top: 76px;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display";
  letter-spacing: 1px;
  margin: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1px;
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
      <Header siteTitle={data.site.siteMetadata?.title} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
