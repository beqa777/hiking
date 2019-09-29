import React from 'react';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { ServiceStyle, Content } from './service.styles';
import IconText from '../icon-text/icon-text.component';

const Service = ({ t }) => {
    const services = t('texts.services');
    const serviceItems = Object.keys(services).map(key => (
        <IconText key={key}
            icon={services[key].icon}
            title={services[key].title}
            text={services[key].text}
            width='19rem' height="27rem" />
    ));

    return (
        <ServiceStyle>
            <Content>
                {serviceItems}
            </Content>
        </ServiceStyle>
    )
};

export default compose(
    withTranslation('common')
)(Service);