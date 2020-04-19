import React from "react"

const Header = ({ total_count }) => (
  <header>
      <h1>
        Kubki Górnik Zabrze
      </h1>
      <div className="cups_counter">
        Stan kolekcji: <span className="count">{ total_count }</span>
      </div>
  </header>
)
export default Header;
