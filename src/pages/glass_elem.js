import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const GlassElemPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO title="Szkło" />
    <Breadcrumbs 
      name={ data.glass.nodes[0].title }
      parent={ '/szklo/'+data.glass.nodes[0].acf.kategoria_szklo.post_name } 
      parent_name={ data.glass.nodes[0].acf.kategoria_szklo.post_title } />
    <h2 className="site_title"
    dangerouslySetInnerHTML={{__html: data.glass.nodes[0].title }}>
    </h2>
    <h3 className="glass_info">
      Data dodania: <span>{ data.glass.nodes[0].acf.data_dodania }</span>
    </h3>
    <h3 className="glass_info">
      Kategoria: <span>{ data.glass.nodes[0].acf.kategoria_szklo.post_title }</span>
    </h3>
    <div className="glass_images">
      <img src={ data.glass.nodes[0].acf.zdjecie_glowne } alt={ "Szkło " + data.glass.nodes[0].acf.kategoria_szklo.post_title + " " + data.glass.nodes[0].title + " nr 1" } className="img" />
      <img src={ data.glass.nodes[0].acf.zdjecie_drugie } alt={ "Szkło " + data.glass.nodes[0].acf.kategoria_szklo.post_title + " " + data.glass.nodes[0].title + " nr 2" } className="img" />
    </div>
  </Layout>
)

export default GlassElemPage;

export const Query = graphql`
  query glassElemQuery($glass_id: Int) {
    glass: allWordpressWpSzklo(filter: {wordpress_id: {eq: $glass_id}}) {
      nodes {
        acf {
          data_dodania
          zdjecie_drugie
          zdjecie_glowne
          kategoria_szklo {
            post_title
            post_name
          }
        }
        title
        slug
        wordpress_id
      }
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`
