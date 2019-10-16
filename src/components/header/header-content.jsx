import React from 'react';

export const HeaderContent = ({ image, t }) => (
    <div className="header" style={{ 'backgroundImage': `url(${image})` }}>
        {/* <nav className='header-navbar'>
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
        </nav> */}
    </div>
);

export default HeaderContent;