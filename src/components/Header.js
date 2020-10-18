import React from 'react'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>matt lai | visual + ux</strong>
    </Link>
    <nav>
      <Link to="/photography">photography</Link>
      <Link to="/contact">contact</Link>
    </nav>
  </header>
)

export default Header
