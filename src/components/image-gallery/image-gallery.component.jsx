import React from 'react';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { getTripImagesStart } from '../../redux/trip-image/trip-image.actions';
import { selectTripImages, selectIsLoading, selectError } from '../../redux/trip-image/trip-image.selector';

import CarouselSlider from 'react-carousel-slider';
import WithCarouselHolder from '../carousel-holder/with-carousel-holder.component';
import BackgroundImage from '../background-image/background-image.component';
import { SpinnerOverlay, SpinnerContainer } from '../with-spinner/with-spinner.styles';
import WithFailure from '../with-failure/with-failure.component';


const ImageGallery = ({ getTripImages, tripImages, isLoading }) => {

    // start getting trips images
    useEffect(() => {
        getTripImages()
    }, [getTripImages])

    const sliderBoxStyleConf = {
        height: '200px',
        width: '100%',
        background: "white"
    };

    let data = tripImages.map((element) => (
        WithCarouselHolder(BackgroundImage)({ elWidth: '175px', elHeight: '175px', imageUrl: element.path, style: { marginTop: '10px' } })
    ));

    return isLoading ? (
        <SpinnerOverlay elHeight='200px'>
            <SpinnerContainer />
        </SpinnerOverlay>) :
        <CarouselSlider
            itemsStyle={{ margin: '0px 10px', height: '100%', background: 'white' }}
            sliderBoxStyle={sliderBoxStyleConf}
            textBoxStyle={{ background: 'white' }}
            accEle={{ button: false }}
            slideCpnts={data} />
};

const mapStateToProps = createStructuredSelector({
    tripImages: selectTripImages,
    isLoading: selectIsLoading,
    error: selectError
});

const mapDispatchToProps = dispatch => ({
    getTripImages: () => dispatch(getTripImagesStart())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithFailure
)(ImageGallery);
