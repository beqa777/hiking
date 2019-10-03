import styled from 'styled-components';

export const InputStyled = styled.div`
    input{
        width: calc(100% - 80px);
        border: none;
        border-radius: 3px;
        outline: inherit;
        padding: 11px 50px 11px 9px;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
    }

    button{
        background: none;
        border: none;
        outline: inherit; 
        position: absolute;
        width: 80px;
        height: 40px;
        cursor: pointer;
        margin-left: -5px;
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 38px;
        color: white;
        border-radius: 0 2px 2px 0;
        background-color: #CBBD9A;
        text-align: center;
        transition: all .4s ease;
    }
`;