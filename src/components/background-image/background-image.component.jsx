import React from 'react';
import styled from 'styled-components';

const BackgroundImageStyle = styled.div`
    width: ${props => props.elWidth}px !important;
    height: ${props => props.elHeight}px !important;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position:center;
`;

const BackgroundImage = (props) => <BackgroundImageStyle {...props} />;

export default BackgroundImage;