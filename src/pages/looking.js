import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LookingPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Home test" />
    SZUKAM
  </Layout>
)

export default LookingPage;