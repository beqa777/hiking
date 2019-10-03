import React from 'react';
import { compose } from 'redux';
import CarouselSlider from 'react-carousel-slider';
import WithCarouselHolder from '../carousel-holder/with-carousel-holder.component';
import BackgroundImage from '../background-image/background-image.component';

const ImageGallery = () => {

    const accEleConfig = {
        button: false
    };

    let imageSources = [
        'https://i.ibb.co/y8hYdxm/trip1-small.jpg',
        'https://i.ibb.co/HtkHCV7/trip2-small.jpg',
        'https://i.ibb.co/nm03YWr/trip3-small.jpg',
        'https://i.ibb.co/kBkLf01/trip4-small.jpg',
        'https://i.ibb.co/mvtQ09j/trip5-small.jpg',
        'https://i.ibb.co/NYVCH66/trip6-small.jpg',
        'https://i.ibb.co/ZzbKvhk/trip7-small.jpg',
        'https://i.ibb.co/6mHcLkx/trip8-small.jpg',
        'https://i.ibb.co/68SLYmq/trip9-small.jpg'
    ];

    const sliderBoxStyleConf = {
        height: '200px',
        width: '100%',
        background: "white"
    };

    let data = imageSources.map((imageUrl, index) => (
        WithCarouselHolder(BackgroundImage)({ elWidth: '175px', elHeight: '175px', imageUrl, style: { marginTop: '10px' } })
    ));

    return (
        <CarouselSlider
            itemsStyle={{ margin: '0px 10px', height: '100%', background: 'white' }}
            sliderBoxStyle={sliderBoxStyleConf}
            textBoxStyle={{ background: 'white' }}
            accEle={accEleConfig}
            slideCpnts={data} />
    )
};

export default compose()(ImageGallery);