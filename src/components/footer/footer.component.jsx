import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';

import InputWithButton from '../input-with-button/input-with-button.component';
import { FooterStyle, FooterInfoHolder, Info, EmailInfo, CopyRight } from './footer.styles';

const Footer = ({ t }) => {
    const links = [
        "FAQs",
        "Download Catalog",
        "Privacy Policy",
        "Cookie Policy"
    ];

    const contacts = [
        "Phone +39 123456789",
        "Mail mail@domain.com",
        "Monday to Friday 9.00 am to 8.00 pm",
        "Saturday from 9.00 am to 12.00 pm",
        "322 Moon St, Venice",
        "Italy, 1231"
    ];



    return (
        <FooterStyle>
            <FooterInfoHolder>
                <Info>
                    <h6>
                        Dolomia
                    </h6>
                    <ul>{
                        Object.keys(t('header.menu')).map(key =>
                            <li key={key}>{t(`header.menu.${key}`)}</li>
                        )
                    }</ul>
                </Info>

                <Info>
                    <h6>Useful Links</h6>
                    <ul>
                        {
                            links.map(key => <li key={key}>{key}</li>)
                        }
                    </ul>
                </Info>

                <Info>
                    <h6>Contacts Us</h6>
                    <ul>
                        {
                            contacts.map(key => <li key={key}>{key}</li>)
                        }
                    </ul>
                </Info>

                <Info>
                    <EmailInfo>
                        <h6> Passionate About Nature </h6>
                        <p>
                            Sign up for Dolomia mounthly newsletter and get to know more about
                            our latest adventures and much mores...
                        </p>
                        <InputWithButton placeholderText="Your email here" buttonText="Sign up" />
                    </EmailInfo>
                </Info>
            </FooterInfoHolder>

            <CopyRight>
                © 2016 Dolomia - Hiking & Outdoor Html Template Handmade by beqa
            </CopyRight>
        </FooterStyle>
    )
};

export default compose(
    withTranslation('common')
)(Footer);