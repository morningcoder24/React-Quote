
import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick}>
            <i className={props.iconClass}></i>
        </button>
    );
}

export default Button;
