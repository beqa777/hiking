import React from 'react';
import './text.styles.scss';

const Text = ({ text, style, isHtml }) => (
    <div className='text' style={style}>
        {
            isHtml ? <div dangerouslySetInnerHTML={{ __html: text }}></div> : <p>{text}</p>
        }
    </div>
);

export default Text;

