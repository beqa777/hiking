import React from 'react';
import ImageHolder from './image-holder.styles';
import image from '../../resources/images/template-for-carousel.png';

const WithCarouselHolder = (WrappedComponent) => (props) => (
    <ImageHolder {...props} style={props.style}>
        <img src={image} alt="" onClick={() => {
            if (props.click instanceof Function) props.click();
        }} />
        <WrappedComponent {...props} />
    </ImageHolder>
);

export default WithCarouselHolder;