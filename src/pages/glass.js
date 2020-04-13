import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const GlassPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Szkło" />
    <Breadcrumbs name="Szkło" parent="" parent_name="" />
    <h2 class="site_title">Szkło</h2>
    <div class="glass_container tiles_container">
    { 
      data.allWordpressWpKategorieSzklo.nodes.map(function(elem) {
         return (
            <div class="item">
              <Link to={ "/szklo/" + elem.slug }>
                <img src={ elem.acf.logo_szklo } alt={ "Zobacz kategorię " + elem.title } />
                <h3 class="title">{ elem.title }</h3>
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
    allWordpressWpKategorieSzklo(sort: {fields: title}) {
      nodes {
        acf {
          logo_szklo
        }
        wordpress_id
        title
        slug
      }
    }
  }
`
