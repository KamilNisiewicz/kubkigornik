import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout total_count={ data.totalCount.totalCount }>
    <SEO title="Kubki Górnik" />
    <div className="main_page_content">
      Cześć!
      <p>Zapraszam do oglądania mojej kolekcji kubków oraz szkła związanych
      z <strong>Górnikiem Zabrze</strong> oraz zaprzyjaźnionymi klubami.</p>
      <p>Zestaw zawiera zarówno pamiątki oficjalnie wydawane
      przez klub, jak i przez grupy kibicowskie Górnika.</p>
      <p>Głównym moim celem są kubki i to ich dotyczy licznik, jednak z chęcią
      poszerzam swoje zbiory również o kieliszki, kufle, szklanki, czy szklanki
      do whisky.</p>
      <p>Zachęcam do zapoznania się z sekcją <strong>"Szukam"</strong>, gdzie znajdują się brakujące
      pozycje w mojej kolekcji. W przypadku, gdy posiadasz znajdujący się tam kubeczek,
      lub jesteś w posiadaniu takiego, którego nie można znaleźć w zestawie - prosiłbym o
      kontakt mailowy:</p>
      <a href="mailto:yogiber@op.pl" className="mail_to">
        &raquo;&nbsp;yogiber@op.pl&nbsp;&laquo;
      </a>
    </div>
  </Layout>
)

export default IndexPage;

export const Query = graphql`
  query CupsTotalCountQuery {
    totalCount: allWordpressWpKubki {
      totalCount
    }
  }
`
