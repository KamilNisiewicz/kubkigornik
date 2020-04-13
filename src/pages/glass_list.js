import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const GlassListPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Szkło lista" />
    <Breadcrumbs name={ data.allWordpressWpKategorieSzklo.nodes[0].title } parent="/szklo" parent_name="Szkło" />
    <h2 class="site_title">
    { data.allWordpressWpKategorieSzklo.nodes[0].title }
    </h2>
  </Layout>
)

export default GlassListPage;

export const Query = graphql`
  query Glass($cat_id: Int) {
    allWordpressWpKategorieSzklo(filter: {wordpress_id: {eq: $cat_id}}) {
      nodes {
        title
      }
   }
  }
`