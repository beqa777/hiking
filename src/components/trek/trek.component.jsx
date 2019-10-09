import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import BackgroundImage from '../background-image/background-image.component';
import { TrekStyle, Price } from './trek.styles';
import TripInfo from '../trip-info/trip-info.component';

const Trek = ({ t, i18n, imageUrl, ...anotherProps }) => {
    const lang = i18n.language;
    return (
        <TrekStyle {...anotherProps}>
            <BackgroundImage elWidth="100%" elHeight="50%" imageUrl={imageUrl}>
                <Price> {lang === "geo" ? "ფასი" : "from"} {anotherProps.price}$ </Price>
            </BackgroundImage>
            <TripInfo {...anotherProps} />
        </TrekStyle>
    )
};

export default compose(
    withTranslation('common')
)(Trek);