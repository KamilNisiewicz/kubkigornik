import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const GlassListPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO title="Szkło lista" />
    <Breadcrumbs name={ data.categories.nodes[0].title } parent="/szklo" parent_name="Szkło" />
    <h2 className="site_title">
      { data.categories.nodes[0].title }
    </h2>
    <div className="section_description" 
    dangerouslySetInnerHTML={{__html: data.categories.nodes[0].content }}>
    </div>
  </Layout>
)

export default GlassListPage;

export const Query = graphql`
  query Glass($cat_id: Int) {
    categories: allWordpressWpKategorieSzklo(filter: {wordpress_id: {eq: $cat_id}}) {
      nodes {
        title
        content
      }
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`