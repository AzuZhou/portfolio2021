import styled from "styled-components"

import { fontSizes, colors } from "styled/constants"
import { desktopBreakpoint, responsivePadding } from "styled/styles"

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => props.$direction ?? "column"};
  align-items: center;
  justify-content: center;
  width: 100%;
  ${responsivePadding};
  ${props => props.$fullWidth && "padding-left: 0px; padding-right: 0px;"};

  ${desktopBreakpoint} {
    align-items: ${props =>
      props.$alignment === "flex-start"
        ? props.$alignment
        : props.$alignment === "flex-end"
        ? props.$alignment
        : "center"};
  }
`

const Title = styled.h2`
  font-size: ${fontSizes.mobile.subtitle};
  text-transform: uppercase;
  color: ${colors.FRENCH_PINK};
  mix-blend-mode: color-dodge;
  display: flex;
  justify-content: center;

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.subtitle};
  }

  @media screen and (min-width: 1200px) {
    color: ${colors.BLUEBERRY};
  }
`

const Circle = styled.div`
  display: none;
  position: absolute;
  height: 150px;
  width: 150px;
  ${props => props.$to}: -75px;
  top: -75px;
  z-index: -1;
  background-color: ${colors.FRENCH_PINK};
  border-radius: 75px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08),
    0 4px 4px rgba(0, 0, 0, 0.08), 0 6px 8px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 1200px) {
    display: initial;
  }
`

const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 30px;

  ${desktopBreakpoint} {
    margin-bottom: 60px;
  }
`

const Subtitle = styled.p`
  margin-top: ${props => (props.$isSubsection ? "20px" : 0)};
  margin-bottom: 20px;
  font-size: ${fontSizes.mobile.primaryText};
  color: ${colors.SECONDHAND_GREY};
  text-align: center;
  line-height: 30px;

  ${desktopBreakpoint} {
    margin-top: ${props => (props.$isSubsection ? "40px" : 0)};
    margin-bottom: 40px;
    font-size: ${fontSizes.desktop.primaryText};
    text-align: ${props => props.$textAlign ?? "initial"};
  }
`

export { Container, Title, TitleContainer, Subtitle, Circle }
