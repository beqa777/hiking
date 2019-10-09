import styled from 'styled-components';

export const AboutTripStyle = styled.div`
    width: 100%;
    height: 43rem;
    background-color: white;
    border: 1px solid red;
`;

export const TripInfoHolder = styled.div`
    width: 90rem;
    height: 100%;
    /* border: 1px solid blue; */
    margin: auto;
`;

export const TripInfo = styled.div`
    width: 50%;
    height: 100%;
    float: left;

    .title{
        width: 100%;
        text-align: left !important;

        .line {
            left: 0 !important;
        }

        .text { 
            text-align: left !important;
            margin: 0px;
        }
    }

    .text{
        text-align: left !important;
    }
`;