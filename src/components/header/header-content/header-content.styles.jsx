import styled from 'styled-components';

export const HeaderContentStyle = styled.div`
  width: 100%;
  height: 82vh !important;
  background: linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%),
        url(${p => p.image});
  background-size: cover;
  background-position: center;
`;