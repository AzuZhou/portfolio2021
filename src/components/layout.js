/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
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
  width: 100vw;
  display: flex;
  flex-direction: column;
}

#gatsby-focus-wrapper {
  align-items: center;
}

main {
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  // if I change it to margin snap scroll will not work
  padding-top: 68px;

  ${desktopBreakpoint} {
    padding-top: 76px;
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

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
