import styled from 'styled-components';

export const AboutTripStyle = styled.div`
    width: 100%;
    height: 43rem;
    background-color: white;
    padding: 20px;
`;

export const TripInfoHolder = styled.div`
    width: 95rem;
    height: 100%;
    /* border: 1px solid blue; */
    margin: auto;
`;

export const TripInfo = styled.div`
    width: 40%;
    height: 100%;
    float: left;
    
    p{
        font-size: 14px !important;
    }

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

export const TripGuideHolder = styled.div`
    width: 60%;
    height: 100%;
    float: left;
    padding: 50px;
`;

export const TripGuide = styled.div`
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.15);
    background-color: #F6F6F6;
    width: 100%;
    height: 100%;
    margin-left: 4rem;
    padding: 5rem;
    text-align: center;
    color: #6E6B66;


    > div {
        :first-child{
            margin: auto;
            border-radius: 60px;
        }

        :nth-child(2){
            margin-top: 20px;
            h3 {
                text-transform: uppercase;
                font-size: 16px !important;
                line-height: 16px;
                margin-bottom: 10px
            }

            span {
                width: 100%;
                display: block;
                font-size: 16px;
                line-height: 26px;
                font-family: "Trirong", serif;
            }
        }

        :last-child{
            ul {
                list-style-type: none;

                li { 
                    float: left;
                }

            }
        }

        
    }
    

`;