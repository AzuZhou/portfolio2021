import React from "react"
import styled from "styled-components"
import ThreeD from "../animations/three-d"
import { LinkOutlined } from "@ant-design/icons"

import { colors, fontSizes } from "../styled/constants"

const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.$reverse ? "row-reverse" : "row")};
  justify-content: space-between;

  > div ~ div {
    ${props => (props.$reverse ? "margin-right" : "margin-left")}: 60px;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.$reverse ? "flex-end" : "flex-start")};
  text-align: ${props => (props.$reverse ? "right" : "left")};
`

const Title = styled.h4`
  font-size: ${fontSizes.desktop.primaryText};
  text-transform: uppercase;
  font-weight: 500;
  color: ${colors.BLUEBERRY};
`

const Paragraph = styled.p`
  font-size: ${fontSizes.desktop.secondaryText};
  font-weight: 500;
  font-style: italic;

  & ~ p {
    margin-top: 10px;
  }
`

const Box = styled.div`
  background-color: white;
  border: 2px solid ${colors.SECONDHAND_GREY};
  width: 260px;
  height: 260px;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const VerticalRectangle = styled.div`
  position: absolute;
  background-color: white;
  height: 102%;
  width: 96%;
`
const HorizontalRectangle = styled.div`
  position: absolute;
  background-color: white;
  height: 96%;
  width: 102%;
`

const Link = styled.a`
  margin-bottom: 30px;
  display: inline-flex;
`

const RepoLink = styled(LinkOutlined)`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 6px;
  color: ${colors.FRENCH_PINK};
`

const Project = ({ name, text, repoLink, projectLink, reverse }) => (
  <Container $reverse={reverse}>
    <Text $reverse={reverse}>
      <Link href={repoLink}>
        <Title>{name}</Title>
        <RepoLink />
      </Link>

      {text.map(p => (
        <Paragraph>{p}</Paragraph>
      ))}
    </Text>

    <ThreeD>
      <Box>
        <VerticalRectangle />
        <HorizontalRectangle />
      </Box>
    </ThreeD>
  </Container>
)

export default Project
