import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const LookingPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO title="Szukam" />
    <Breadcrumbs name="Szukam" parent="" parent_name="" />
    <h2 className="site_title">Szukam ({ data.looking.totalCount })</h2>
    <div className="section_description">
      <p>Poniżej znajdziecie kubki, których brakuje w moich zbiorach.</p>
      <p>
        Jeżeli posiadasz którychś z nich i jesteś skłonny go odsprzedać to
        zachęcam do kontaktu mailowego na adres podany poniżej.
      </p>
      <a href="mailto:yogiber@op.pl" className="mail_to">
        &raquo;&nbsp;yogiber@op.pl&nbsp;&laquo;
      </a>
    </div>
    <div className="looking_container">
    { 
      data.looking.nodes.map(function(elem) {
         return (
            <div className="item" key={ elem.wordpress_id }>
              <img src={ elem.acf.zdjecie_szukam } alt={ "Kubek " + elem.title + " - zdjęcie" } className="img" />
              <div dangerouslySetInnerHTML={{__html: elem.title }} className="title"></div>
            </div>
         )
      })
    }
    </div>
  </Layout>
)

export default LookingPage;

export const Query = graphql`
  query LookingData {
    looking: allWordpressWpSzukam(sort: {fields: title}) {
      nodes {
        acf {
          zdjecie_szukam
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