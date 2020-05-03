import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const GlassPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO 
      title="Wyroby ze szkła - kubki Górnik Zabrze"
      description="Wyroby ze szkła wydane przez Górnik takie jak kieliszki,
      kufle, czy szklanki. Sprawdź!" />
    <Breadcrumbs name="Szkło" parent="" parent_name="" />
    <h2 className="site_title">Szkło</h2>
    <div className="section_description">
      Wyroby ze szkłą zostały podzielone na następujące podkategorie:<br/>
      <em>Kieliszki,</em>
      <em>&nbsp;Kufle,</em>
      <em>&nbsp;Szklanki</em>&nbsp;oraz
      <em>&nbsp;Szklanki do whisky</em>
    </div>
    <div className="glass_container tiles_container">
    { 
      data.categories.nodes.map(function(elem) {
         return (
            <div className="item" key={ elem.wordpress_id }>
              <Link to={ "/szklo/" + elem.slug }>
                <img src={ elem.acf.logo_szklo } alt={ "Zobacz kategorię " + elem.title } />
                <h3 className="title">{ elem.title }</h3>
              </Link>
            </div>
         )
      })
    }
    </div>
  </Layout>
)

export default GlassPage;

export const Query = graphql`
  query KategorieSzklo {
    categories: allWordpressWpKategorieSzklo(sort: {fields: title}) {
      nodes {
        acf {
          logo_szklo
        }
        wordpress_id
        title
        slug
      }
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`
