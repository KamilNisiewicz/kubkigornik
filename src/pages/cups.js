import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const CupsPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO 
      title="Kubeczki, garnuszki - kubki Górnik Zabrze"
      description="Kubeczki wydane przez Górnik, grupę kibicowską Torcida
      oraz zaprzyjaźniony z klubem zespoły. Zobacz!" />
    <Breadcrumbs name="Kubki" parent="" parent_name="" />
    <h2 className="site_title">Kubki</h2>
    <div className="section_description">
      Kubeczki zostały podzielone na następujące podkategorie:<br/>
      <em>Fan Cluby</em>,
      <em>&nbsp;Górnik Zabrze</em>,
      <em>&nbsp;Okazjonalne</em>,
      <em>&nbsp;Torcida Górnik</em>&nbsp;oraz
      <em>&nbsp;Zgody</em>
    </div>
    <div className="cups_container tiles_container">
    { 
      data.categories.nodes.map(function(elem) {
         return (
           <div className="item" key={ elem.wordpress_id }>
            <Link to={ "/kubki/" + elem.slug }>
              <img src={ elem.acf.logo_kategoria } alt={ "Zobacz kategorię " + elem.title } />
              <h3 className="title">{ elem.title }</h3>
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
    categories: allWordpressWpKategorieKubki(sort: {fields: title}) {
      nodes {
        acf {
          logo_kategoria
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