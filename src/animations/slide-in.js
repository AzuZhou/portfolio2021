import React from "react"
import styled from "styled-components"
import { useTransition, a } from "react-spring"

const Container = styled(a.div)`
  position: relative;
  height: 60px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SlideIn = ({ isVisible, children }) => {
  const items = React.Children.toArray(children)

  const transitions = useTransition(
    isVisible ? items : [],
    item => item.props.id,
    {
      config: { mass: 5, tension: 2000, friction: 200 },
      from: { opacity: 0, left: "-100%" },
      enter: { opacity: 1, left: "0%" },
      leave: { opacity: 0, left: "-100%" },
      trail: 300 / items.length,
      unique: true,
      reset: true,
    }
  )

  return transitions.map(({ item, key, props }) => (
    <Container key={key}>
      {React.cloneElement(item, { style: props })}
    </Container>
  ))
}

export default React.memo(
  SlideIn,
  (prevProps, nextProps) => prevProps.isVisible === nextProps.isVisible
)

// TODO: turn React memo into hoc
