import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 100%;
    padding: 6rem;
    height: 39rem;
    background-color: #444444;
`;

export const FooterInfoHolder = styled.div`
    width: 97rem;
    height: 90%;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
    margin: auto;
`;

export const Info = styled.div`
    color: white;
    float: left;
    width: 16rem;

    &:nth-child(3){
        width: 32rem;
    }

    h6 {
        float: left;
        height: 100%;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0;
        margin-bottom: 10px;
    }

    ul {
        list-style-type: none;
        li{
            float: left;
            width: 100%;
            color: #d1d2d3;
            font-family: "Trirong", serif;
            font-size: 14px;
            line-height: 24px;
            font-weight: 300;
        }
    }
`;

export const EmailInfo = styled.div`
    float: left;
    width : 32rem;
    height: 100%;
    p{
        float: left;
        width: 100%;
        font-family: "Trirong", serif;
        color: #d1d2d3 !important;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 16px;
        letter-spacing: 0.5px;
        font-weight: 300;
        margin-bottom: 40px;
    }
`;

export const CopyRight = styled.div`
    width: 97rem;
    height: 10%;
    margin: auto;
    font-size: 14px;
    padding-top: 20px;
    font-family: "Trirong", serif;
    color: #d1d2d3 !important;
 
`;