import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';

import './header.styles.scss';
 
const Header = ({ t, i18n }) => (
    <header id='header'>
        <nav className='header-navbar'>
            <div className='navbar-content'>
                <div className='logo' />

                <div className='menu'>
                    <ul>
                        {
                            Object.keys(t('header.menu')).map(key =>
                                <li key={key}>{t(`header.menu.${key}`)}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);


export default compose(
    withTranslation('common')
)(Header);