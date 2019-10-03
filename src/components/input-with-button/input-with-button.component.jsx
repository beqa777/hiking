import React from 'react';
import { InputStyled } from './input-with-button.styles';

const InputWithButton = ({ placeholderText, buttonText }) => (
    <InputStyled>
        <input type="text" placeholder={placeholderText} />
        <button> {buttonText} </button>
    </InputStyled>
);

export default InputWithButton;