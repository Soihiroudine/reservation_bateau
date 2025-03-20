import React from 'react';

const Navbar = ({children}) => {
    return (
        <nav className='nav'>
            {children}
        </nav>
    );
}

export default Navbar;