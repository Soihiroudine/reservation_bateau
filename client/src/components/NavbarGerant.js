import React from 'react';

const NavbarGerant = ({nomUtilisateur}) => {
    return (
        <nav className='nav'>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/reservation">Reservation</a></li>
                <li><a href="/profil">{nomUtilisateur}</a></li>
                <li><a href="/logout">logout</a></li>
            </ul>
        </nav>
    );
}

export default NavbarGerant;