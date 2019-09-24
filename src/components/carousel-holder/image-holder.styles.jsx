import styled from 'styled-components';

const ImageHolder = styled.div`
    box-sizing: border-box;
    width: ${props => props.elWidth}px !important; 
    height: ${props => props.elHeight}px !important;
    img {
        width: 100% !important;
        height: ${props => props.elHeight}px !important;
        /* margin-top: ${props => -props.elHeight}px !important; */
    }
    & :nth-child(2) {
       margin-top: ${props => -props.elHeight}px !important;
       z-index:10;
       position : absolute;
       pointer-events : none;
      
    }
`;

export default ImageHolder;