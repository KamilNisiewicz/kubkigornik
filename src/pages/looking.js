import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumbs from "../components/breadcrumbs"

const LookingPage = ({ data }) => (
  <Layout current_site="index">
    <SEO title="Home test" />
    <Breadcrumbs name="Szukam" parent="" parent_name="" />
    <h2 class="site_title">Szukam</h2>
  </Layout>
)

export default LookingPage;