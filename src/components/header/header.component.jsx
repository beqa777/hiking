import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-slideshow-image';
import { compose } from 'redux';
import { selectInfo } from '../../redux/trip-detail/trip-detail.selectors';

import HeaderContent from './header-content/header-content.component';
import Navbar from './navbar/navbar.component';

import image1 from '../../resources/images/header-background.jpg';
import image2 from '../../resources/images/backImage2.jpg';
import './header.styles.scss';

const Header = ({ t, tripInfo }) => {
    let [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', function (event) {
            setScroll(window.scrollY > 0);
        });
    }, []);

    const properties = {
        duration: 9000,
        transitionDuration: 1500,
        infinite: true,
        arrows: true,
    }

    return (
        <React.Fragment>
            <Navbar t={t} scroll={scroll ? 1 : undefined} />
            {
                tripInfo ?
                    (<HeaderContent t={t} image={tripInfo.imageUrl} />)
                    :
                    (<div className="slide-container">
                        <Slide {...properties}>
                            <div className="each-slide">
                                <HeaderContent t={t} image={image1} />
                            </div>
                            <div className="each-slide">
                                <HeaderContent t={t} image={image2} />
                            </div>
                        </Slide>
                    </div>)

            }

        </React.Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    tripInfo: selectInfo
});

export default compose(
    connect(mapStateToProps),
    withTranslation('common'),
)(Header);