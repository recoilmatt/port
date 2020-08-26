import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>matt lai | visual + ux</strong>
    </Link>
    <nav>
      <a href="/photography">photography</a>
      <a href="/contact">contact</a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
