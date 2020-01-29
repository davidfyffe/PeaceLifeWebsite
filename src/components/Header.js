import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import SmallLogo_icon from "../assets/images/SmallLogo_icon.png";

const Header = (props) => (
    <header id="header" className="alt">
        {/*<img src={SmallLogo_icon} alt="" />*/}
        <div className="logo">
            <img src={SmallLogo_icon} alt="" />
            <strong>Peacelife</strong>Yoga</div>
        {/*<nav>*/}
        {/*    <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>*/}
        {/*</nav>*/}
        <link rel="apple-touch-icon" href="/src/assets/images/SmallLogo_icon.png" />
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
