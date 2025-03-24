import React from 'react';

const NavbarDafault = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/reservation">Reservation</a></li>
                <li><a href="/connexion">Connexion</a></li>
            </ul>
        </nav>
    );
}

export default NavbarDafault;