import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CupElemPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO title="Kubek" />
  </Layout>
)

export default CupElemPage;

export const Query = graphql`
  query CupsTotalCountQuery2 {
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`
