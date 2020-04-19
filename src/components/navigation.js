import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <div className="nav_container">
      <Link to="/" activeClassName="active">Strona główna</Link>
      <Link to="/kubki" activeClassName="active">Kubki</Link>
      <Link to="/szklo" activeClassName="active">Szkło</Link>
      <Link to="/szukam" activeClassName="active">Szukam</Link>
    </div>
  </nav>
)
export default Navigation
