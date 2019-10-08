import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import BackgroundImage from '../background-image/background-image.component';
import { TrekStyle, Price } from './trek.styles';
import TripInfo from '../trip-info/trip-info.component';

const Trek = ({ t, imageUrl, ...anotherProps }) => (
    <TrekStyle {...anotherProps}>
        <BackgroundImage elWidth="100%" elHeight="50%" imageUrl={imageUrl}>
            <Price> from 120$ </Price>
        </BackgroundImage>
        <TripInfo />
    </TrekStyle>
);

export default compose(
    withTranslation('common')
)(Trek);