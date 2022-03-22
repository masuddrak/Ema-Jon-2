import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-info'>
                <a href="/home">Home</a>
                <a href="/About">About</a>
                <a href="/services">Services</a>
            </div>
        </nav>
    );
};

export default Header;