import React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ name, parent, parent_name }) => (
  <ul className="breadcrumbs">
    <li><Link to="/">Strona Główna</Link>&nbsp;&raquo;&nbsp;</li>
    { parent && <li><Link to={parent}>{ parent_name }</Link>&nbsp;&raquo;&nbsp;</li>}
    { name && <li><strong dangerouslySetInnerHTML={{__html: name }}></strong></li> }
  </ul>
)
export default Breadcrumbs
