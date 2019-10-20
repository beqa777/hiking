import styled from 'styled-components';

const ImageHolder = styled.div`
    box-sizing: border-box;
    width: ${props => props.elWidth} !important; 
    height: ${props => props.elHeight} !important;
    img {
        width: 100% !important;
        height: ${props => props.elHeight} !important;
        cursor: pointer;
    }
    > div {
       margin-top: -${props => props.elHeight} !important;
       z-index:10;
       position : absolute;
       pointer-events : none;
      
    }
`;

export default ImageHolder;