import React from 'react';
import './header.styles.scss';

const Header = () => (
    <header id='header'>
        <nav className='header-navbar'>
            <div className='navbar-content'>
                <div className='logo' />

                <div className='menu'>
                    <ul>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Treks</li>
                        <li>Gallery</li>
                        <li>Blog</li>
                        <li>Elements</li>
                        <li>Contact </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;