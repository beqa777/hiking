import React from 'react';
import './text.styles.scss';

const Text = ({ text, style }) => (
    <div className='text' style={style}>
        <p>{text}</p>
    </div>
);

export default Text;

