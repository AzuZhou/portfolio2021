import React from "react"
import styled from "styled-components"
import ThreeD from "../../animations/three-d"

const Container = styled.div`
  background-color: white;
  width: 300px;
  height: 300px;
`

const Box = ({ name, imgUrl, id }) => (
  <ThreeD elementId={id}>
    <Container id={id}>{name}</Container>
  </ThreeD>
)

export default Box
