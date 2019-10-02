import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { ShowcaseTreksStyle } from './showcase-treks.styles';
import Title from '../title/title.component';
import Trek from '../trek/trek.component';
import WithCarouselHolder from '../carousel-holder/with-carousel-holder.component';
import CarouselSlider from 'react-carousel-slider';


const ShowcaseTreks = ({ t, elWidth, elHeight }) => {

    let treksData = [];
    for (let index = 0; index < 10; index++) {
        treksData.push(
            WithCarouselHolder(Trek)({ elWidth: '46rem', elHeight: '52rem', }));
    }
    return (
        <ShowcaseTreksStyle {...{ elWidth, elHeight }}>
            <Title title={t('descriptions.trips.title')} text={t('descriptions.trips.text')} />
            <CarouselSlider
                accEle={{ button: false }}
                sliderBoxStyle={{
                    height: '63rem',
                    background: '#F6F6F6'
                }}
                itemsStyle={{background: '#F6F6F6' }}
                textBoxStyle={{ background: '#F6F6F6' }}
                slideCpnts={treksData}
            />
        </ShowcaseTreksStyle>
    );
}

export default compose(
    withTranslation('common')
)(ShowcaseTreks); 