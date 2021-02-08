import React, { useState, useEffect } from "react"
import styled from "styled-components"
import "@fontsource/montserrat/500.css"

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
  background-color: ${colors.GREY};
  box-shadow: 0px 1px 2px white;
  height: 3px;
  width: 40px;
`

const MenuDropdown = styled.nav`
  position: absolute;
  width: 100%;
  height: calc(100vh - 88px);
  top: 88px;
  left: 0;
  background-color: white;
  transform: translateY(${props => (props.$isDropdownOpen ? 0 : "-100%")});
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
    color: ${colors.GREY};
    font-weight: 500;

    ${desktopBreakpoint} {
      font-size: ${fontSizes.desktop.primaryText};
    }
  }
`

const Underline = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${colors.GREY};
  margin-top: 6px;
`

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // useEffect(() => {
  //   if (isDropdownOpen) {
  //   }
  // }, [isDropdownOpen])

  const handleDropdown = () => setIsDropdownOpen(prev => !prev)

  const handleClick = () => {
    if (isDropdownOpen) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
    handleDropdown()
  }
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
            <a href="#skills" onClick={handleClick}>
              Skills
            </a>
            <Underline />
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <a href="#projects" onClick={handleClick}>
              Projects
            </a>
            <Underline />
          </div>
        </MenuItem>

        <MenuItem>
          <div>
            <a href="#miscellaneous" onClick={handleClick}>
              Miscellaneous
            </a>
            <Underline />
          </div>
        </MenuItem>
      </MenuDropdown>
    </Container>
  )
}

export default Menu
