import React from 'react';
import logo from './../assets/logo.png';
import "../css/header.css";

const Header = ({children}) => {
    return (
        <header className='header'>
            <a href='/'><img src={logo} alt="logo" /></a>
            {children}
        </header>
    );
}

export default Header;