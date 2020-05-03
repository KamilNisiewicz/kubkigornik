import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const GlassListPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO 
      title={ "Wyroby szklane - " + data.categories.nodes[0].title + ' - kubki Górnik Zabrze'}
      description={ "Szkło z kategorii " + data.categories.nodes[0].title
      + ". Na liście już " + data.glasses.totalCount + " pozycji! Zobacz i pomóż zdobyć kolejne!" } />
    <Breadcrumbs name={ data.categories.nodes[0].title } parent="/szklo" parent_name="Szkło" />
    <h2 className="site_title">
      { data.categories.nodes[0].title } ({ data.glasses.totalCount})
    </h2>
    <div className="section_description" 
    dangerouslySetInnerHTML={{__html: data.categories.nodes[0].content }}>
    </div>
    <div class="item_list">
    { 
      data.glasses.nodes.map(function(elem) {
         return (
           <div className="item" key={ elem.wordpress_id }>
              <a href={ "/szklo/" + data.categories.nodes[0].slug + "/" + elem.slug }>
                <img data-src={ elem.acf.zdjecie_glowne } alt={ "Szkło " + data.categories.nodes[0].title + " " + elem.title } className="img lazyload" />
                <h4 class="title" dangerouslySetInnerHTML={{__html: elem.title}}></h4>
              </a>
           </div>
         )
      })
    }
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
        slug
      }
    }
    glasses: allWordpressWpSzklo(filter: {acf: {kategoria_szklo: {wordpress_id: {eq: $cat_id}}}}, sort: {fields: title, order: ASC}) {
      nodes {
        acf {
          data_dodania
          zdjecie_glowne
        }
        wordpress_id
        title
        slug
      }
      totalCount
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`