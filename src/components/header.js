import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"

import { colors, fontSizes } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.SANDY_BROWN};
  ${responsivePadding}
`

const Logo = styled(Link)`
  color: white;
  text-shadow: 0px 1px 2px white;

  > h1 {
    font-size: ${fontSizes.mobile.title};

    ${desktopBreakpoint} {
      font-size: ${fontSizes.desktop.title};
    }
  }
`

const SunContainer = styled.div`
  position: relative;
  height: 100%;
`
const Sun = styled.div`
  background-color: ${colors.SHADY};
  position: absolute;
  position: absolute;
  top: -120px;
  left: -100px;
  height: 200px;
  width: 200px;
  border-radius: 100px;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Logo to="/">
      <h1>{siteTitle}</h1>
    </Logo>

    <SunContainer>
      <Sun />
    </SunContainer>

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
