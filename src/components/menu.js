import React, { useState, useEffect } from "react"
import styled from "styled-components"
import "@fontsource/montserrat/500.css"

import { contactIcons } from "./contact"

import { colors, fontSizes } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const Container = styled.div`
  display: initial;

  ${desktopBreakpoint} {
    display: none;
  }
`

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  background-color: white;

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
      <MenuIcon onClick={handleDropdown}>
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
