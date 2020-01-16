import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>matt lai</strong></Link>
        <nav>
            <a href="generic">resume</a>
            <a href="generic">projects</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
