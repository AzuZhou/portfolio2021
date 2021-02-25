import React from "react"
import Img from "gatsby-image"

export default ({ data }) => {
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
