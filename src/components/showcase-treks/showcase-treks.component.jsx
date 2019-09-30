import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import { ShowcaseTreksStyle } from './showcase-treks.styles';
import Title from '../title/title.component';
import Trek from '../trek/trek.component';

const ShowcaseTreks = ({ t }) => (
    <ShowcaseTreksStyle>
        <Title title={t('descriptions.trips.title')} text={t('descriptions.trips.text')} />
        <Trek />
    </ShowcaseTreksStyle>
);

export default compose(
    withTranslation('common')
)(ShowcaseTreks); 