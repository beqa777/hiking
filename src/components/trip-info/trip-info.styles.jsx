import styled from 'styled-components';

export const TripInfoStyle = styled.div`
    background-color: white;
    border: 1px solid green;
    width: 100%;
    height : 40%;
    padding: 35px;


    > div {
        &:not(:last-child){
            border-bottom : 1px solid #ccc;
        }

        &:nth-child(2){
            text-align: center;
            font-family: "Montserrat";
            font-size: 16px;
            text-transform: uppercase;
            line-height: 25px;
            color: #2F2911;
        }

        &:last-child{
            padding-top: 15px;
        }
    }

`;

export const Detail = styled.div`
    padding : 10px;
    height: ${p => p.primary ? '38%' : '24%'} ;
`;

export const InfoHolder = styled.div`
    float : left;
    width: 33.3%;
    div {
        width: 100%;
        text-align: center;
        font-family: "Montserrat";

        &:first-child{
            line-height: 22px;
            color: #ACA056;
            letter-spacing: 0.5px;
            font-size : 22px;
        }

        &:last-child{
            font-size : 14px;
            vertical-align: text-bottom;
            color: #6E6B66;
            margin-top: 6px;
        }

    }

`;

