import React from 'react';
import { NavbarStyle, NavbarContent, Logo, Menu } from './navbar.styles';

const Navbar = ({ t, scroll }) => (
    <NavbarStyle scroll={scroll}>
        <NavbarContent>
            <Logo to="/" scroll={scroll} />
            <Menu scroll={scroll}>
                <ul>
                    {
                        Object.keys(t('header.menu')).map(key =>
                            <li key={key}>{t(`header.menu.${key}`)}</li>
                        )
                    }
                </ul>
            </Menu>
        </NavbarContent>
    </NavbarStyle>
);

export default Navbar;