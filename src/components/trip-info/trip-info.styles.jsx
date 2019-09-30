import styled from 'styled-components';

export const TripInfoStyle = styled.div`
    border: 1px solid green;
    width: 100%;
    height : 40%;
    padding: 35px;


    div {
        &:not(:last-child){
            border-bottom : 1px solid #ccc;
        }
    }

`;

export const Detail = styled.div`
    padding : 10px;
    height: ${p => p.primary ? '40%' : '20%'} ;
`;

