import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import Title from '../title/title.component';
import Text from '../text/text.component';

import './about-styles.scss';


const AboutUs = ({ t }) => {

    return (
        <div className='about-us'>
            <Title {...t('descriptions.about')} />
            <Text text={t('texts.about')} style={{ width: '90rem' }} />

            <div className='gray'>
                <div className='content'>
                    
                </div>
            </div>
        </div>
    )
};

export default compose(
    withTranslation('common')
)(AboutUs);