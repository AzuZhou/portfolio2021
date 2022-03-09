import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data, alt }) => {
  const img = getImage(data.placeholderImage)

  if (!img) {
    return <div>Picture not found</div>
  }

  return <GatsbyImage image={img} alt={alt} backgroundColor={"white"} />
}
