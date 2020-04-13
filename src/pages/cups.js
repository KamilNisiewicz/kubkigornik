import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const CupsPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Kubki" />
    <Breadcrumbs name="Kubki" parent="" parent_name="" />
    <h2 class="site_title">Kubki</h2>
    <div class="cups_container tiles_container">
    { 
      data.allWordpressWpKategorieKubki.nodes.map(function(elem) {
         return (
           <div class="item">
            <Link to={ "/kubki/" + elem.slug }>
              <img src={ elem.acf.logo_kategoria } alt={ "Zobacz kategorię " + elem.title } />
              <h3 class="title">{ elem.title }</h3>
            </Link>
           </div>
         )
      })
    }
    </div>
  </Layout>
)

export default CupsPage;

export const Query = graphql`
  query KategorieKubki {
    allWordpressWpKategorieKubki(sort: {fields: title}) {
      nodes {
        acf {
          logo_kategoria
        }
        wordpress_id
        title
        slug
      }
    }
  }
`