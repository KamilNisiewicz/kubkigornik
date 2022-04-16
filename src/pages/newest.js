import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const CupsListPage = ({ data, pageContext }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO
      title={
        "Kubeczki - nowości(21) - kubki Górnik Zabrze"
      }
      description={
        "Zobacz 21 najnowszych kubków z mojej kolekcji! Zbiorcze zestawienie z wszystkich kategorii."
      }
    />
    <Breadcrumbs
      name="Nowości"
    />
    <h2 className="site_title">
      Nowości (21)
    </h2>
    <div
      className="section_description"
    >
      Lista najnowszych kubeczków z kolekcji. Zawiera zdjęcia ze wszystkich kategorii:
      <div class="newest-links">
        <Link to="/kubki/fan-cluby">Fan cluby &raquo;</Link>
        <Link to="/kubki/gornik-zabrze">Górnik Zabrze &raquo;</Link>
        <Link to="/kubki/okazjonalne">Okazjonalne &raquo;</Link>
        <Link to="/kubki/torcida-gornik">Torcida Górnik &raquo;</Link>
        <Link to="/kubki/zgody">Zgody &raquo;</Link>
      </div>
    </div>
    <div className="item_list">
    { 
      data.cups.edges.map(function(elem) {
         return (
           <div className="item" key={ elem.node.wordpress_id }>
              <a href={ "/kubki/"+ elem.node.acf.kategoria.post_name + "/" + elem.node.slug }>
                <img data-src={ elem.node.acf.zdjecie_glowne } alt={ "Kubek " + elem.node.title } className="img lazyload" />
                <h4 className="title" dangerouslySetInnerHTML={{__html: elem.node.title}}></h4>
              </a>
           </div>
         )
      })
    }
    </div>
  </Layout>
)

export default CupsListPage

export const Query = graphql`
  query Newest {
    cups: allWordpressWpKubki(sort: { fields: date, order: DESC }, limit: 21) {
      edges {
        node {
          date
          slug
          acf {
            kategoria {
              post_name
            }
            zdjecie_glowne
          }
          wordpress_id
          title
        }
      }
    }
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`
