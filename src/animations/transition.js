import React from "react"
import styled from "styled-components"
import { useTransition, a } from "react-spring"

import { colors, fontSizes } from "../styled/constants"
import { desktopBreakpoint } from "../styled/styles"

const Container = styled(a.div)`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 150px);
  justify-content: center;

  ${desktopBreakpoint} {
    justify-content: flex-start;
  }
`

const ItemContainer = styled(a.div)`
  font-size: ${fontSizes.mobile.primaryText};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${colors.FRENCH_PINK};
  color: white;
  will-change: opacity, transform;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02), 0 2px 2px rgba(0, 0, 0, 0.02),
    0 4px 4px rgba(0, 0, 0, 0.02), 0 2px 8px rgba(0, 0, 0, 0.02),
    0 8px 16px rgba(0, 0, 0, 0.02);

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.primaryText};
  }
`

const Transition = ({ isVisible, children }) => {
  const items = React.Children.toArray(children)

  const transitions = useTransition(
    isVisible ? items : [],
    item => item.props.id,
    {
      config: { mass: 5, tension: 2000, friction: 200 },
      from: { opacity: 0, transform: "scale(0)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0)" },
      trail: 300 / items.length,
      unique: true,
      delay: isVisible ? 300 : 0,
    }
  )

  return (
    <Container>
      {transitions.map(({ item, key, props }) => (
        <ItemContainer key={`${key}-animation`} style={props}>
          {item}
        </ItemContainer>
      ))}
    </Container>
  )
}

export default React.memo(
  Transition,
  (prevProps, nextProps) => prevProps.isVisible === nextProps.isVisible
)
