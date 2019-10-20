import styled from 'styled-components';

export const TripDescriptionStyle = styled.div`
    width: 100%;
    height: 65rem;
    background-color: #F6F6F6;
`;

export const DescriptionHolder = styled.div`
    margin : auto;
    font-size: 16px !important;
    width: 94rem;
`;

export const InfoIconHolder = styled.div`
    width: 100%;
    height: 15rem;
`;

export const InfoIcon = styled.div`
    height: 100%;
    width: calc(100% / 6);
    float: left;
    /* border: 1px solid red; */
    text-align : center;
    padding: 1.5rem;
    i {
        font-size: 5rem;
        color: #2F2911;
        display: block;
    }

    em {
        font-size: 16px;
        line-height: 26px;
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
        display: block;
        text-transform: capitalize;
    }
    h3 {
        color: #CBBD9A;
        font-size: 16px !important;
        time {
            font-size: 16px !important;
        }
    }

`;

export const TextHolder = styled.div`
    width: 100%;
    margin-top: 50px;
    font-size: 16px !important;
`;