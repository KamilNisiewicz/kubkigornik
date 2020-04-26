import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const CupElemPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO title="Kubek" />
    <Breadcrumbs 
      name={ data.cup.nodes[0].title }
      parent={ '/kubki/'+data.cup.nodes[0].acf.kategoria.post_name } 
      parent_name={ data.cup.nodes[0].acf.kategoria.post_title } />
    <h2 className="site_title"
    dangerouslySetInnerHTML={{__html: data.cup.nodes[0].title }}>
    </h2>
    <h3 className="cup_info">
      Data dodania: <span>{ data.cup.nodes[0].acf.data_dodania }</span>
    </h3>
    <h3 className="cup_info">
      Kategoria: <span>{ data.cup.nodes[0].acf.kategoria.post_title }</span>
    </h3>
    <div className="cup_images">
      <img src={ data.cup.nodes[0].acf.zdjecie_drugie } alt={ 'Kubek zdjęcie nr 2' + data.cup.nodes[0].title } className="img" />
      <img src={ data.cup.nodes[0].acf.zdjecie_glowne } alt={ 'Kubek zdjęcie nr 1' + data.cup.nodes[0].title } className="img" />
      <img src={ data.cup.nodes[0].acf.zdjecie_trzecie } alt={ 'Kubek zdjęcie nr 3' + data.cup.nodes[0].title } className="img" />
    </div>
  </Layout>
)

export default CupElemPage;

export const Query = graphql`
  query CupElemQuery($cup_id: Int) {
    cup: allWordpressWpKubki(filter: {wordpress_id: {eq: $cup_id}}) {
      nodes {
        acf {
          data_dodania
          zdjecie_drugie
          zdjecie_glowne
          zdjecie_trzecie
          kategoria {
            post_title
            post_name
          }
        }
        slug
        title
        wordpress_id
      }
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`
