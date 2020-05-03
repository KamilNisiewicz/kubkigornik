import React from "react"
import { Link } from "gatsby"

const Header = ({ total_count }) => (
  <header>
      <h1>
      <Link to={ "/" }>Kubki Górnik Zabrze</Link>
      </h1>
      <div className="cups_counter">
        Stan kolekcji: <span className="count">{ total_count }</span>
      </div>
  </header>
)
export default Header;
