import React from "react"
import styled from "styled-components"
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons"

import Section from "./shared/section"

import Background from "../images/background.svg"

import { colors, fontSizes } from "../styled/constants"
import { responsivePadding, desktopBreakpoint } from "../styled/styles"

const Container = styled.section`
  display: flex;
  justify-content: center;
  ${responsivePadding}
  padding-bottom: 0;
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  svg {
    font-size: ${fontSizes.mobile.subtitle};
    fill: ${colors.FRENCH_PINK};
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  ${desktopBreakpoint} {
    height: 20px;
    width: 20px;
    padding: 10px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    background-color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
      0 4px 4px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.06),
      0 8px 16px rgba(0, 0, 0, 0.06);

    &:first-child {
      border-top-right-radius: 20px;
    }

    &:last-child {
      border-bottom-right-radius: 20px;
    }

    svg {
      font-size: ${fontSizes.desktop.primaryText};
    }
  }
`

const Hero = styled(Background)`
  width: 100%;
`

const Ruffles = styled.div`
  display: none;
  position: fixed;
  right: 0;
  top: calc(50vh - 66px);
  flex-direction: column;

  ${desktopBreakpoint} {
    display: flex;
  }
`

export const contactIcons = (
  <>
    <IconContainer>
      <a
        href="https://linkedin.com/in/azu-zhou"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinOutlined />
      </a>
    </IconContainer>
    <IconContainer>
      <a href="https://github.com/AzuZhou" target="_blank" rel="noreferrer">
        <GithubOutlined />
      </a>
    </IconContainer>
    <IconContainer>
      <a href="mailto:azucena.zhou@gmail.com">
        <MailOutlined />
      </a>
    </IconContainer>
  </>
)

const Contact = () => (
  <Container>
    <SectionContainer>
      <Ruffles>{contactIcons}</Ruffles>

      <Section end>
        <Hero />
      </Section>
    </SectionContainer>
  </Container>
)

export default Contact
