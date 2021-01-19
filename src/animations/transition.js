import React from "react"
import styled from "styled-components"
import { useTransition, a } from "react-spring"

import { fontSizes } from "../styled/constants"
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
  border: 1px solid white;
  font-size: ${fontSizes.mobile.primaryText};
  font-weight: normal;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: white;
  background-color: ${props => props.$color};
  will-change: opacity, transform;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover {
    background-color: white;
    color: ${props => props.$color};
  }

  ${desktopBreakpoint} {
    font-size: ${fontSizes.desktop.primaryText};
  }
`

const Transition = ({ isVisible, children, color }) => {
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
      reset: true,
    }
  )

  return (
    <Container>
      {transitions.map(({ item, key, props }) => (
        <ItemContainer key={key} style={props} $color={color}>
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
