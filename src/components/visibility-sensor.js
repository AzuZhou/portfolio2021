import React, { useState } from "react"
import PropTypes from "prop-types"
import VSensor from "react-visibility-sensor"

const VisibilitySensor = ({ once, children, ...otherProps }) => {
  const [active, setActive] = useState(true)

  return (
    <VSensor
      active={active}
      onChange={isVisible => once && isVisible && setActive(false)}
      {...otherProps}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  )
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired,
}

VisibilitySensor.defaultProps = {
  once: false,
}

export default VisibilitySensor
