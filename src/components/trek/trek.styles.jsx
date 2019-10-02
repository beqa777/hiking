import styled from 'styled-components';

export const TrekStyle = styled.div`
    width: ${props => props.elWidth} !important;
    height: ${props => props.elHeight} !important;
    margin: 0px;
   
    position: relative;
    cursor: pointer !important;
    /* box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.2); */
`;

export const Price = styled.div`
    position: absolute;
    top: 36px;
    left: 36px;
    background-color: #CBBD9A;
    border-radius: 2px;
    width: 13rem !important;
    height: 4rem !important;
    line-height: 40px;
    font-size: 12px;
    padding-right: 30px;
    padding-left: 30px;
    letter-spacing: 1px;
    color: white;
    text-align: center;
    transition: left .3s ease;
    box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);

`;
