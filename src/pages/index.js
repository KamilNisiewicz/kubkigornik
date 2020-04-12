import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Home test" />
    <div class="main-page-text-mugs" style={{fontSize:20+'px', lineHeight:30+'px', padding: 25+'px '+ 0}}>
    Witam.<br/>
      Zapraszam do zapoznania się z moją kolekcją kubków Górnika Zabrze, wydanych oficjalnie przez klub, jak i przez grupy kibicowskie Górnika.<br />
Strona ma wyłącznie charakter informacyjno-prezentacyjny.<br />
Zachęcam również do kontaktu wszystkie osoby, które posiadają kubki lub kieliszki Górnika Zabrze na sprzedaż, dzięki czemu kolekcja będzie mogła się powiększać.<br />
Adres e-mail:<br /><a href="mailto:yogiber@op.pl">yogiber@op.pl</a>
    </div>
  </Layout>
)

export default IndexPage;

