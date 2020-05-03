import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO
      title="Strona nie została znaleziona - kubkigornik.pl"
      description="Strona, której szukasz nie istnieje. Sprawdź inną,
      zobacz kubki, kieliszki oraz inne szkło Górnik Zabrze" />
    <h3 className="error_header">
      Upsss, strona nie została znaleziona!
    </h3>
    <img src={'/images/gornik_logo.png'} alt="Logo Górnik Zabrze - strona nie znaleziona" className="error_img" />
  </Layout>
)

export default NotFoundPage

export const Query = graphql`
  query CupsTotalCountQuery404 {
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`