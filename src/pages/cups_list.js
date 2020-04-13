import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const CupsListPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Kubki" />
    <Breadcrumbs name={ data.allWordpressWpKategorieKubki.nodes[0].title } parent="/kubki" parent_name="Kubki" />
    <h2 class="site_title">
    { data.allWordpressWpKategorieKubki.nodes[0].title }
    </h2>
    { JSON.stringify(data.allWordpressWpKubki) }
  </Layout>
)

export default CupsListPage;

export const Query = graphql`
  query Cups($cat_id: Int) {
    allWordpressWpKategorieKubki(filter: {wordpress_id: {eq: $cat_id}}) {
      nodes {
        title
      }
    }
    allWordpressWpKubki(filter: {acf: {kategoria: {wordpress_id: {eq: $cat_id}}}}) {
      nodes {
        title
        acf {
          data_dodania
          zdjecie_glowne
        }
        slug
      }
    }
  }
`