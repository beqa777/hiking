import React from 'react';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-slideshow-image';
import { compose } from 'redux';
import './header.styles.scss';
import HeaderContent from './header-content.component';
import Navbar from './navbar/navbar.component';

import image1 from '../../resources/images/header-background.jpg';
import image2 from '../../resources/images/backImage2.jpg';

const Header = ({ t, scroll }) => {

    const properties = {
        duration: 9000,
        transitionDuration: 1500,
        infinite: true,
        arrows: true,
    }

    return (
        <React.Fragment>
            <Navbar t={t} scroll={scroll} />

            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <HeaderContent t={t} image={image1} />
                    </div>
                    <div className="each-slide">
                        <HeaderContent t={t} image={image2} />
                    </div>
                </Slide>
            </div>
        </React.Fragment>
    )
};


export default compose(
    withTranslation('common')
)(Header);