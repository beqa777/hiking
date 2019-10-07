import React from 'react';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { getTripImagesStart } from '../../redux/trip-image/trip-image.actions';
import { selectTripImages } from '../../redux/trip-image/trip-image.selector';

import CarouselSlider from 'react-carousel-slider';
import WithCarouselHolder from '../carousel-holder/with-carousel-holder.component';
import BackgroundImage from '../background-image/background-image.component';

const ImageGallery = ({ getTripImages, tripImages }) => {
    const sliderBoxStyleConf = {
        height: '200px',
        width: '100%',
        background: "white"
    };

    // start getting trips images
    useEffect(() => {
        getTripImages()
    }, [getTripImages])


    let data = tripImages.map((element) => (
        WithCarouselHolder(BackgroundImage)({ elWidth: '175px', elHeight: '175px', imageUrl: element.path, style: { marginTop: '10px' } })
    ));

    return (
        <CarouselSlider
            itemsStyle={{ margin: '0px 10px', height: '100%', background: 'white' }}
            sliderBoxStyle={sliderBoxStyleConf}
            textBoxStyle={{ background: 'white' }}
            accEle={{ button: false }}
            slideCpnts={data} />
    )
};

const mapStateToProps = createStructuredSelector({
    tripImages: selectTripImages
});

const mapDispatchToProps = dispatch => ({
    getTripImages: () => dispatch(getTripImagesStart())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ImageGallery);
