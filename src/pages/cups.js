import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CupsPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Home test" />
    KUBKI
  </Layout>
)

export default CupsPage;

