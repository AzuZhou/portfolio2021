import React from "react"
import { useSpring, a } from "react-spring"

export default ({ isVisible, children, unstyled }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    width: unstyled ? "" : "100%",
  })

  return <a.div style={props}>{children}</a.div>
}
