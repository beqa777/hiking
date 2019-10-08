import styled from 'styled-components';

export const WithFailureStyle = styled.div`
    height: ${p => p.elHeight ? p.elHeight : '100%'};
    width: ${p => p.elWidth ? p.elWidth : '100%'};
    text-align: center;
    line-height: ${p => p.elHeight};
    font-size: 20px;
    color: red;
    vertical-align: middle;
`;