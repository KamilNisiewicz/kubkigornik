import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const CupsListPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO title="Kubki" />
    <Breadcrumbs name={ data.categories.nodes[0].title } parent="/kubki" parent_name="Kubki" />
    <h2 className="site_title">
    { data.categories.nodes[0].title } ({ data.cups.totalCount})
    </h2>
    <div className="section_description" 
    dangerouslySetInnerHTML={{__html: data.categories.nodes[0].content }}>
    </div>
    { 
      data.cups.nodes.map(function(elem) {
         return (
           <div className="item" key={ elem.wordpress_id }>
              { elem.title }
              <img src={ elem.acf.zdjecie_glowne }  style={{maxWidth:200+'px'}} alt="" />
           </div>
         )
      })
    }
  </Layout>
)

export default CupsListPage;

export const Query = graphql`
  query Cups($cat_id: Int) {
    categories: allWordpressWpKategorieKubki(filter: {wordpress_id: {eq: $cat_id}}) {
      nodes {
        title
        content
      }
    }
    cups: allWordpressWpKubki(filter: {acf: {kategoria: {wordpress_id: {eq: $cat_id}}}}) {
      nodes {
        title
        acf {
          data_dodania
          zdjecie_glowne
        }
        slug
        wordpress_id
      }
      totalCount
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`