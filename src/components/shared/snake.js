import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: linear-gradient(
    ${props => props.$degrees},
    ${props => props.$firstColor} 49%,
    ${props => props.$secondColor} 50% 100%
  );
`

const Snake = ({ firstColor, secondColor, degrees }) => (
  <Container
    $degrees={degrees}
    $firstColor={firstColor}
    $secondColor={secondColor}
  />
)

export default Snake
