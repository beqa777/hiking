import React, { useEffect, useState } from 'react';

// aditional modules
import { withTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

// redux stuff
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectInfo, selectInfoError } from '../../redux/trip-detail/trip-detail.selectors';

// my components
import HeaderContent from './header-content/header-content.component';
import WithFailure from '../with-failure/with-failure.component';
import Navbar from './navbar/navbar.component';

// style, images
import image1 from '../../resources/images/header-background.jpg';
import image2 from '../../resources/images/backImage2.jpg';
import './header.styles.scss';

const Header = ({ t, tripInfo }) => {
    let [scroll, setScroll] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', function (event) {
            setScroll(window.scrollY > 0);
        });
        setScroll(window.scrollY > 0);

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
                location.pathname !== "/" ?
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
    tripInfo: selectInfo,
    error: selectInfoError
});

export default compose(
    connect(mapStateToProps),
    withTranslation('common'),
    WithFailure
)(Header);