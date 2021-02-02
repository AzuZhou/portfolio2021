import styled from "styled-components"
import React from "react"

import { colors } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const Container = styled.div``

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
  width: 20px;

  ${desktopBreakpoint} {
    width: 40px;
  }
`

const MenuDropdown = styled.div``

const Menu = () => (
  <Container>
    <MenuIcon>
      <MenuIconBar />
      <MenuIconBar />
      <MenuIconBar />
    </MenuIcon>

    <MenuDropdown></MenuDropdown>
  </Container>
)

export default Menu
