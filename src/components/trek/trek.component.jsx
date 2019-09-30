import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import BackgroundImage from '../background-image/background-image.component';
import templateImage from '../../resources/images/trackTemplate.jpg'
import {TrekStyle} from './trek.styles';
import TripInfo from '../trip-info/trip-info.component';

const Trek = ({ t , }) => (
    <TrekStyle>
        <BackgroundImage elWidth="100%" elHeight="60%" imageUrl={templateImage}></BackgroundImage>
        <TripInfo/>
    </TrekStyle>
);

export default compose(
    withTranslation('common')
)(Trek);