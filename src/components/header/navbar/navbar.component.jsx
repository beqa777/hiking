import React from 'react';
import { NavbarStyle, NavbarContent, Logo, Menu, FlagHolderStyle } from './navbar.styles';
import ReactFlagsSelect from 'react-flags-select';

import 'react-flags-select/scss/react-flags-select.scss';

const Navbar = ({ t, i18n, scroll }) => {
    let language = i18n.language;

    return (
        <NavbarStyle scroll={scroll}>
            <NavbarContent>
                <Logo to="/" scroll={scroll} />
                <FlagHolderStyle scroll={scroll}>
                    <ReactFlagsSelect
                        onSelect={(countryCode) => {
                            i18n.changeLanguage(countryCode === "US" ? "eng" : "geo");
                        }}
                        countries={["US", "GE"]}
                        customLabels={{ "US": "USA", "GE": "GEO" }}
                        defaultCountry={language === "eng" ? "US" : "GE"}
                    />
                </FlagHolderStyle>
                <Menu scroll={scroll}>
                    <ul>
                        {
                            Object.keys(t('header.menu')).map(key =>
                                <li key={key}>{t(`header.menu.${key}`)}</li>
                            )
                        }
                    </ul>
                </Menu>


            </NavbarContent>
        </NavbarStyle>
    )
};

export default Navbar;