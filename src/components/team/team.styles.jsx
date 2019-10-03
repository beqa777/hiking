import styled from 'styled-components';

export const TeamStyle = styled.div`
    width: 100%;
    padding: 3rem;
    height: 63rem;
`;

export const TeamHolder = styled.div`
    margin: auto;
    height: 100%;
    width: 110rem;
`;

export const TeamMember = styled.div`
    margin-top : 2rem;
    width: 30rem;
    height: 40rem;
    margin-left: 4rem;
    float: left;
    box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.2);
`;

export const MemberInfo = styled.div`
    padding : 30px;
    text-align: center;
    width: 100%;
    & :first-child{
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #2F2911;
        display:block;
    }

    & :last-child{
        color: #6E6B66;
        position: relative;
        letter-spacing: 0;
        font-size: 16px;
        line-height: 26px;
        font-family: "Trirong", serif;
        font-weight: 100;
        transition: all .3s ease-out;
    }
`;
