import styled from 'styled-components';

export const IconTextStyle = styled.div`
    width: ${p => p.width};
    float: left;
    height: ${p => p.height} !important;
    color: #6E6B66;
    text-align: center;
    margin: 5rem;
    i {
        font-size: 4rem;
    }
`;

export const Title = styled.h6`
    margin-top: 10px;
    font-family: "Montserrat";
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
`;

export const Text = styled.p`
    margin-top: 10px;
    font-family: "Trirong";
    font-size: 1.5rem;
`;