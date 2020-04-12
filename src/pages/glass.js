import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GlassPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Home test" />
    SZKŁO
  </Layout>
)

export default GlassPage;