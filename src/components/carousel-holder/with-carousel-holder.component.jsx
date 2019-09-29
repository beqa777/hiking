import React from 'react';
import ImageHolder from './image-holder.styles';

const WithCarouselHolder = (WrappedComponent) => (props) => (
    <ImageHolder {...props} style={props.style}>
        <img src="https://cdn1.imggmi.com/uploads/2019/9/24/df2e8e60267d64f01a75c8b75178a08c-full.jpg" alt="" />
        <WrappedComponent {...props} />
    </ImageHolder>
);

export default WithCarouselHolder;