import React, { useState, useEffect } from "react"
import styled from "styled-components"
import "@fontsource/montserrat/500.css"

import { contactIcons } from "./contact"

import { colors, fontSizes } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const Container = styled.nav`
  display: initial;

  ${desktopBreakpoint} {
    display: none;
  }
`

const MenuIcon = styled.button`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: flex-start;

  div:first-child {
    transform-origin: top right;
    transform: ${props =>
      props.$isDropdownOpen
        ? "rotateZ(-45deg) translateX(-3px) translateY(-6px)"
        : "rotateZ(0deg) translate(0px) translateY(0px)"};
    transition: transform 0.3s ease-in-out;
  }

  div:last-child {
    transform-origin: bottom right;
    transform: ${props =>
      props.$isDropdownOpen
        ? "rotateZ(45deg) translateX(-1px) translateY(6px)"
        : "rotateZ(0deg) translate(0px) translateY(0px)"};
    transition: transform 0.3s ease-in-out;
  }

  div:nth-child(2) {
    opacity: ${props => (props.$isDropdownOpen ? 0 : 1)};
    transform: ${props =>
      props.$isDropdownOpen ? "translateX(100%)" : " translateX(0%)"};
    transition: transform 0.3s ease-in-out,
      opacity ${props => (props.$isDropdownOpen ? "0s" : "0.3s ease-out")};
  }

  div ~ div {
    margin-top: 8px;
  }
`

const MenuIconBar = styled.div`
  background-color: ${colors.SECONDHAND_GREY};
  height: 3px;
  width: 40px;
`

const MenuDropdown = styled.nav`
  position: absolute;
  width: 100%;
  height: calc(100vh - 68px);
  top: 68px;
  left: 100%;
  background-color: white;
  left: ${props => (props.$isDropdownOpen ? 0 : "100%")};
  transition: left 0.3s ease-in-out;
`

const MenuItem = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  a {
    text-transform: uppercase;
    font-size: ${fontSizes.mobile.primaryText};
    color: ${colors.SECONDHAND_GREY};
    font-weight: 500;
  }
`

const Underline = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${colors.SECONDHAND_GREY};
  margin-top: 6px;
`

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [isDropdownOpen])

  const handleDropdown = () => setIsDropdownOpen(prev => !prev)

  return (
    <Container>
      <MenuIcon onClick={handleDropdown} $isDropdownOpen={isDropdownOpen}>
        <MenuIconBar />
        <MenuIconBar />
        <MenuIconBar />
      </MenuIcon>

      <MenuDropdown $isDropdownOpen={isDropdownOpen}>
        <MenuItem>
          <div>
            <a href="#skills" onClick={handleDropdown}>
              Skills
            </a>
            <Underline />
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <a href="#projects" onClick={handleDropdown}>
              Projects
            </a>
            <Underline />
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <a href="#miscellaneous" onClick={handleDropdown}>
              Miscellaneous
            </a>
            <Underline />
          </div>
        </MenuItem>

        <MenuItem>{contactIcons}</MenuItem>
      </MenuDropdown>
    </Container>
  )
}

export default Menu
