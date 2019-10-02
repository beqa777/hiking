import styled from 'styled-components';

export const TripInfoStyle = styled.div`
    background-color: white;
    width: 100% !important;
    height: 50% !important;
    overflow: hidden;
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
            line-height: 40px;
            color: #2F2911;
        }

        &:nth-child(3){
            padding-top: 25px;
            text-align: center;
            text-transform: capitalize;

            
            & :first-child{
                font-size: 18px;
                text-align: center;
                display: block; 
                font-family: "Montserrat";
                font-size: 16px;
            }
             
            & :last-child{
                font-size: 14px;
                text-align: center;
                display: block; 
                margin-top: 5px;
                color: #6E6B66;
                font-family: "Montserrat";
            }

        }
    }

`;

export const Detail = styled.div`
    padding : 10px;
    display: block;
    height: ${p => p.primary ? '35%' : '30%'} !important;
`;

export const InfoHolder = styled.div`
    float : left;
    width: 33.3% !important;
    span {
        width: 100%;
        text-align: center !important;
        font-family: "Montserrat";

        &:first-child{
            color: #ACA056; 
            box-sizing: border-box;
            padding: 0px !important;
            display : inline;
            letter-spacing: 0.5px;
            font-size : 22px;
            display : block;
        }

        &:last-child{
            display : block;
            font-size : 14px;
            color:red;
            color: #6E6B66;
            margin-top: 6px;
        }

    }

`;

