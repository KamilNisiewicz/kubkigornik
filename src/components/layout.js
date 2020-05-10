/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import CookieConsent from 'react-cookie-consent';

const Layout = ({ children, total_count }) => {
  return (
    <>
      <Header total_count={ total_count } />
      <Navigation />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
      <CookieConsent
          location="bottom"
          buttonText="Rozumiem"
          cookieName="gatsby-gdpr-google-analytics">
          Używamy plików cookies do celów statystycznych. Korzystając z naszej strony wyrażasz zgodę na wykorzystywanie przez nas plików cookies.
          Pamiętaj, że możesz samodzielnie zarządzać cookies, zmieniając ustawienia przeglądarki.
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
