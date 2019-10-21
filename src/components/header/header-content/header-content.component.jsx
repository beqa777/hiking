import React from 'react';
import { HeaderContentStyle, HeaderContentHolder, HeaderTitle, HeaderText } from './header-content.styles';

export const HeaderContent = ({ image, title, text, sliding }) => {
    return (
        <HeaderContentStyle image={image}>
            {
                !sliding ?
                    <HeaderContentHolder>
                        <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
                        <HeaderText>{text}</HeaderText>
                    </HeaderContentHolder> : null
            }

        </HeaderContentStyle>
    )
};

export default HeaderContent;