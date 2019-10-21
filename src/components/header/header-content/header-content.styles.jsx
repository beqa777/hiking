import styled, { keyframes } from 'styled-components';

const moveToBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(4rem);
    }

    95%{
      opacity: 1;
      transform: translateY(-0.5rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const HeaderContentStyle = styled.div`
  width: 100%;
  height: 82vh !important;
  background: linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%),
        url(${p => p.image});
  background-size: cover;
  background-position: center;
`;

export const HeaderContentHolder = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-40%);
  width: 100%;
  height: 37rem;
  text-align: center;
`;

export const HeaderTitle = styled.span`
  display: block;
  animation:  0.7s ${moveToBottom} ease-out;
  font-size: 50px;
  width: 50rem;
  line-height: 60px;
  letter-spacing: 0.5px;
  margin: auto;
  color: white;
  font-family: "Montserrat", sans-serif;
`;

export const HeaderText = styled.span`
  animation:  0.7s ${moveToBottom} ease-out;
  display: block;
  margin: auto;
  color: white;
  width: 50rem;
  margin-top: 25px;
  font-size: 16px;
  line-height: 26px;
  font-family: "Trirong", serif;
  font-weight: 300;
`;