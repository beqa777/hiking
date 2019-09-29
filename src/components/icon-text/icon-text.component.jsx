import React from 'react';
import { IconTextStyle, Title, Text } from './icon-text.styles';

const IconText = ({ title, text, icon, width, height }) => (
    <IconTextStyle {...{ width, height }}>
        <i className={icon}></i>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </IconTextStyle>
);

export default IconText;