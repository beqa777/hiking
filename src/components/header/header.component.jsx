import React from 'react';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-slideshow-image';
import { compose } from 'redux';
import './header.styles.scss';
import HeaderContent from './header-content';

import image1 from '../../resources/images/header-background.jpg';
import image2 from '../../resources/images/backImage2.jpg';

const Header = ({ t, i18n }) => {

    const properties = {
        duration: 9000,
        transitionDuration: 1500,
        infinite: true,
        arrows: true,
    }

    return (


        <div className="slide-container">

            <nav className='navbar'>
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

            <Slide {...properties}>
                <div className="each-slide">
                    <HeaderContent t={t} image={image1} />
                </div>
                <div className="each-slide">
                    <HeaderContent t={t} image={image2} />
                </div>
            </Slide>
        </div>
    )
};


export default compose(
    withTranslation('common')
)(Header);