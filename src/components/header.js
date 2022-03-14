import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "@fontsource/montserrat/500.css"

import Menu from "./menu"

import { colors, fontSizes } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const Container = styled.header`
  position: fixed;
  z-index: 2;
  background: white;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @supports (backdrop-filter: saturate(180%) blur(18px)) {
    backdrop-filter: saturate(180%) blur(18px);
    background: rgba(255, 255, 255, 0.6);
  }

  ${desktopBreakpoint} {
    padding: 10px 40px;
  }
`

const Logo = styled(Link)`
  color: ${colors.SECONDHAND_GREY};

  > h1 {
    font-size: ${fontSizes.mobile.title};

    ${desktopBreakpoint} {
      font-size: ${fontSizes.desktop.title};
    }
  }
`

const Navbar = styled.nav`
  display: none;

  > div ~ div {
    margin-left: 40px;
  }

  ${desktopBreakpoint} {
    display: flex;
  }
`

const NavbarItem = styled.div`
  padding: 10px;

  a {
    text-transform: uppercase;
    font-size: ${fontSizes.desktop.secondaryText};
    color: ${colors.SECONDHAND_GREY};
    font-weight: 500;

    & ~ a {
      margin-left: 40px;
    }
  }
`

const Header = () => (
  <Container>
    <Logo to="/">
      <h1>AZ</h1>
    </Logo>

    <Navbar>
      <NavbarItem>
        <a href="#skills">Skills</a>
      </NavbarItem>

      <NavbarItem>
        <a href="#projects">Projects</a>
      </NavbarItem>

      <NavbarItem>
        <a href="#miscellaneous">Miscellaneous</a>
      </NavbarItem>
    </Navbar>

    <Menu />
  </Container>
)

export default Header
