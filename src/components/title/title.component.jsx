import React from 'react';
import './title.styles.scss';

const Title = ({ title, text }) => (
    <div className='title'>
        <div className='line' />
        <h2 className='title-heading'>{title}</h2>
        <div className='text'>{text}</div>
    </div>
);

export default Title;