import React from 'react';
import ImageHolder from './image-holder.styles';
import image from '../../resources/images/template-for-carousel.jpg';

const WithCarouselHolder = (WrappedComponent) => (props) => (
    <ImageHolder {...props} style={props.style}>
        <img src={image} alt="" />
        <WrappedComponent {...props} />
    </ImageHolder>
);

export default WithCarouselHolder;