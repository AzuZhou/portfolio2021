import React from "react"
import styled from "styled-components"
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons"

import Section from "./shared/section"

import { colors, fontSizes } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const Container = styled.section`
  background-color: ${colors.MAASTRICHT_BLUE};
  display: flex;
  justify-content: center;
  ${responsivePadding}
`

const SectionContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const IconContainer = styled.div`
  padding: 40px 0;

  svg {
    font-size: ${fontSizes.mobile.title};
    fill: white;
  }

  ${desktopBreakpoint} {
    padding: 0 60px;

    svg {
      font-size: ${fontSizes.desktop.title};
    }
  }
`

const Contact = () => (
  <Container>
    <SectionContainer>
      <Section animation="verticalTrail" direction="row-reverse">
        <IconContainer>
          <a href="https://github.com/AzuZhou" target="_blank">
            <GithubOutlined />
          </a>
        </IconContainer>
        <IconContainer>
          <a href="https://linkedin.com/in/azu-zhou" target="_blank">
            <LinkedinOutlined />
          </a>
        </IconContainer>
      </Section>
    </SectionContainer>
  </Container>
)

export default Contact
