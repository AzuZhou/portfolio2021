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
import "@fontsource/yeseva-one"
import "@fontsource/nunito/300.css"
import "@fontsource/nunito"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
}

body {
  font-family: "Nunito";
  font-weight: 300;
  margin: 0;
  min-height: 100%;
  display: flex;
  color: white;
}

#___gatsby, #gatsby-focus-wrapper {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Yeseve One";
  margin: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
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
