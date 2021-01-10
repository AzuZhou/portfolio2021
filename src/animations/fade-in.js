import React from "react"
import { useSpring, a } from "react-spring"

export default ({ isVisible, children }) => {
  const props = useSpring({ opacity: isVisible ? 1 : 0 })

  return <a.div style={props}>{children}</a.div>
}
