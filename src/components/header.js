import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"

import { colors, fontSizes } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const Container = styled.header`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${responsivePadding}
`

const Logo = styled(Link)`
  color: ${colors.GREY};

  > h1 {
    font-size: ${fontSizes.mobile.title};

    ${desktopBreakpoint} {
      font-size: ${fontSizes.desktop.title};
    }
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <Logo to="/">
      <h1>{siteTitle}</h1>
    </Logo>

    <Menu />
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
