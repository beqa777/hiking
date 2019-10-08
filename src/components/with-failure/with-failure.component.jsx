import React from 'react';
import { WithFailureStyle } from './with-failure.styles';

const WithFailure = (WrappedComponent) => ({ error = false, ...otherProps }) => {
    if (error) console.error(error);
    return (
        error ? (
            <WithFailureStyle {...otherProps}>
                ამჟამათ ამ მონაცემების ჩვენება შეუძლებელია
        </WithFailureStyle>) :
            (<WrappedComponent {...otherProps} />)

    )
};

export default WithFailure;