import React from 'react';
import { TripGalleryStyle, TripGalleryHolder } from './trip-gallery.styles';
import BackgroundImage from '../../background-image/background-image.component';
import { withTranslation } from 'react-i18next';
import Title from '../../title/title.component';
import trip1 from '../../../resources/images/trip_images/trip1-small.jpg';
import trip2 from '../../../resources/images/trip_images/trip2-small.jpg';
import trip3 from '../../../resources/images/trip_images/trip3-small.jpg';
import trip4 from '../../../resources/images/trip_images/trip4-small.jpg';

const TripGallery = ({ t }) => {
    const images = [
        trip1,
        trip2,
        trip3,
        trip4
    ];
    return (
        <TripGalleryStyle>
            <Title title={t('descriptions.gallery.title')} text={t('descriptions.gallery.text')} />
            <TripGalleryHolder>
                {
                    images.map((imageUrl, index) => (
                        <BackgroundImage key={index} elWidth="37rem" elHeight="25rem" imageUrl={imageUrl} />
                    ))
                }
            </TripGalleryHolder>
        </TripGalleryStyle>
    )
};

export default withTranslation('common')(TripGallery);