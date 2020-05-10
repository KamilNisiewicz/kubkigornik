import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const CupsListPage = ({ data, pageContext }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO
      title={ "Kubeczki - " + data.categories.nodes[0].title + ' - kubki Górnik Zabrze'}
      description={ "Kubki z kategorii " + data.categories.nodes[0].title
      + ". Na liście już " + data.cups.totalCount + " pozycji! Zobacz i pomóż zdobyć kolejne!" } />
    <Breadcrumbs name={ data.categories.nodes[0].title } parent="/kubki" parent_name="Kubki" />
    <h2 className="site_title">
    { data.categories.nodes[0].title } ({ data.cups.totalCount})
    </h2>
    <div className="section_description" 
    dangerouslySetInnerHTML={{__html: data.categories.nodes[0].content }}>
    </div>
    <div className="item_list">
    { 
      data.cups.nodes.map(function(elem) {
         return (
           <div className="item" key={ elem.wordpress_id }>
              <a href={ "/kubki/" + data.categories.nodes[0].slug + "/" + elem.slug }>
                <img data-src={ elem.acf.zdjecie_glowne } alt={ "Kubek " + elem.title } className="img lazyload" />
                <h4 className="title" dangerouslySetInnerHTML={{__html: elem.title}}></h4>
              </a>
           </div>
         )
      })
    }
    </div>
    <div className="pagination">
      { pageContext.currentPage !== 1 && <a href={ "/kubki/"+data.categories.nodes[0].slug+"/" + ((pageContext.currentPage - 1) === 1 ? "" : pageContext.currentPage - 1)} className="pagination_link pagination_prev">{ "<" + (pageContext.currentPage - 1) }</a> }
      <strong className="pagination_current">{ pageContext.currentPage }</strong>
      { pageContext.currentPage !== pageContext.numPages && <a href={ "/kubki/" + data.categories.nodes[0].slug + "/" + (pageContext.currentPage + 1)} className="pagination_link pagination_next">{ (pageContext.currentPage + 1) + ">" }</a>}
    </div>
  </Layout>
)

export default CupsListPage;

export const Query = graphql`
  query Cups($cat_id: Int, $skip: Int, $limit: Int) {
    categories: allWordpressWpKategorieKubki(filter: {wordpress_id: {eq: $cat_id}}) {
      nodes {
        title
        content
        slug
      }
    }
    cups: allWordpressWpKubki(
        filter: {acf: {kategoria: {wordpress_id: {eq: $cat_id}}}},
        sort: {fields: title, order: ASC}
        limit: $limit,
        skip: $skip
      ){
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