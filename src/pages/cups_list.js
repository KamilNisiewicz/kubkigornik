import React from "react"
import { graphql } from "gatsby"

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
    <div class="item_list">
    { 
      data.cups.nodes.map(function(elem) {
         return (
           <div className="item" key={ elem.wordpress_id }>
              <a href={ "/kubki/" + data.categories.nodes[0].slug + "/" + elem.slug }>
                <img data-src={ elem.acf.zdjecie_glowne } alt={ "Kubek " + elem.title } className="img lazyload" />
                <h4 class="title" dangerouslySetInnerHTML={{__html: elem.title}}></h4>
              </a>
           </div>
         )
      })
    }
    </div>
  </Layout>
)

export default CupsListPage;

export const Query = graphql`
  query Cups($cat_id: Int) {
    categories: allWordpressWpKategorieKubki(filter: {wordpress_id: {eq: $cat_id}}) {
      nodes {
        title
        content
        slug
      }
    }
    cups: allWordpressWpKubki(filter: {acf: {kategoria: {wordpress_id: {eq: $cat_id}}}}, sort: {fields: title, order: ASC}) {
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