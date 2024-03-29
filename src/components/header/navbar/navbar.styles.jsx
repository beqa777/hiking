import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImageWhite from '../../../resources/images/logo_white.png';
import logoImageBlack from '../../../resources/images/logo_black.png';


export const NavbarStyle = styled.nav`
    transition: all 0.6s ease-in;
    width: 100%;
    height: 8rem;
    background-color: ${p => p.scroll ? 'white' : 'none'};
    z-index: 100;
    position: fixed;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
`;

export const NavbarContent = styled.div`
    width: 95rem;
    margin: auto;
    height: 100%;
`;

export const Logo = styled(Link)`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 4rem;
    width: 8.6rem;
    background-image: url( ${ p => p.scroll ? logoImageBlack : logoImageWhite});
    background-size: cover;
    float: left;
`;

export const Menu = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 4rem;
    float: right;

    ul {
        list-style: none;
    }

    li {
        float: left;
        color: ${ p => p.scroll ? '#2F2911;' : 'white'};
        margin-left: 3rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-family: "Open Sans", sans-serif;
        font-weight: 4rem;
        padding: 1rem 0;
        letter-spacing: 0.05rem;
        cursor: pointer;
    }
`;

export const FlagHolderStyle = styled.div`
    position: relative;
    top: 50%;
    margin-left: 10px;
    float: right;
    width: 100px;
    transform: translateY(-50%) !important;
    padding-top: 5px;

    * {
        font-size: 15px !important;
    }

    .flag-select {
        position: relative;
        display: inline-block;
        vertical-align: inherit;
        padding-bottom: 5px;
        color: ${ p => p.scroll ? '#4d4d4d' : 'white'};
        font-weight: bold;
        text-align: left;

        .arrow-down {
            color: ${ p => p.scroll ? '#4d4d4d' : 'white'};
        }

        .flag-option .country-label {
            color: ${ p => '#4d4d4d'};
            padding: 0 9px;
        }
    }

    
    
`;