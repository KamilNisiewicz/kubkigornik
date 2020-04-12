/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"

function SEO({ description, lang, meta, title }) {

  return (
    <Helmet
      title={title}
    />
  )
}

export default SEO
