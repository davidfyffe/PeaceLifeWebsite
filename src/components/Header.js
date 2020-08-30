import React from 'react'
import PropTypes from 'prop-types'
import SmallLogo_icon from "../assets/images/SmallLogo_icon.png";
import yogaAlliance from '../assets/images/membership-stamp---Accredited.png'

const Header = () => (
    <header id="header" className="alt">
        <div className="logo">
            <img src={SmallLogo_icon} alt="" />
            <strong>Peacelife</strong>Yoga
            </div>
        <link rel="apple-touch-icon" href="/src/assets/images/SmallLogo_icon.png" />

    </header>
);

Header.propTypes = {
    onToggleMenu: PropTypes.func
};

export default Header
