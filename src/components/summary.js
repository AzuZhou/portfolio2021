import React from "react"
import styled from "styled-components"

import Card from "./shared/card"

import { colors, fontSizes } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const Container = styled.div`
  height: 500px;
  background-color: ${colors.SANDY_BROWN};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-shadow: 0px 1px 2px white;
    margin: 0;
    font-family: "Yeseve One";
    letter-spacing: 1.2px;
    font-size: ${fontSizes.mobile.title};
  }

  ${desktopBreakpoint} {
    width: 80%;

    p {
      font-size: ${fontSizes.desktop.title};
    }
  }
`

const Summary = () => (
  <Container>
    <CardContainer>
      <Card animation="trail">
        <p>
          Welcome to my <strong>portfolio</strong>,
        </p>
        <p>
          my name is <strong>Azucena Zhou</strong>
        </p>
        <p>
          and I am a <strong>frontend developer</strong>.
        </p>
      </Card>
    </CardContainer>
  </Container>
)

export default Summary
