import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Peacelife</strong>Yoga</Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
        <link rel="apple-touch-icon" href="/src/assets/images/SmallLogo_icon.png" />
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
