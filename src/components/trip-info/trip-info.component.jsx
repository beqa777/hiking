import React from 'react';
import { TripInfoStyle, Detail, InfoHolder } from './trip-info.styles';
import { withTranslation } from 'react-i18next';


const TripInfo = ({ days, size, i18n, t, difficultly, ...otherParams }) => {

    const lang = i18n.language;

    return (
        <TripInfoStyle>
            <Detail primary>
                <InfoHolder>
                    <span>{days}</span>
                    <span>{t('trips.days')}</span>
                </InfoHolder>

                <InfoHolder>
                    <span>{size}</span>
                    <span>{t('trips.size')}</span>
                </InfoHolder>

                <InfoHolder>
                    <span>{t(`trips.levels.${difficultly}`)}</span>
                    <span>{t('trips.difficulty')}</span>
                </InfoHolder>

            </Detail>

            <Detail>
                {otherParams[`title_${lang}`]}
            </Detail>

            <Detail primary>
                <span>{otherParams[`location_title_${lang}`]}</span>
                <span>{otherParams[`location_${lang}`]}</span>
            </Detail>
        </TripInfoStyle>
    )
};

export default withTranslation('common')(TripInfo);