import React from "react"
import styled from "styled-components"
import { useTransition, a } from "react-spring"

const Container = styled(a.div)`
  position: relative;
  min-height: ${props => (props.$height ? `${props.$height}px` : 0)};
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & ~ div {
    margin-top: ${props => `${props.$gap}px`};
  }
`

const SlideIn = ({ isVisible, from, gap, height, children }) => {
  const items = React.Children.toArray(children)

  const animation = {
    left: {
      from: { opacity: 0, left: "-100%" },
      enter: { opacity: 1, left: "0%" },
      leave: { opacity: 0, left: "-100%" },
    },
    right: {
      from: { opacity: 0, right: "-100%" },
      enter: { opacity: 1, right: "0%" },
      leave: { opacity: 0, right: "-100%" },
    },
  }

  const transitions = useTransition(
    isVisible ? items : [],
    item => item.props.id,
    {
      ...animation[from],
      config: { mass: 5, tension: 2000, friction: 200 },
      trail: 300 / items.length,
      unique: true,
      delay: isVisible ? 300 : 0,
    }
  )

  return transitions.map(({ item, key, props }) => (
    <Container key={`${key}-animation`} $height={height} $gap={gap}>
      {React.cloneElement(item, {
        style: props,
      })}
    </Container>
  ))
}

export default React.memo(
  SlideIn,
  (prevProps, nextProps) => prevProps.isVisible === nextProps.isVisible
)

// TODO: turn React memo into hoc
