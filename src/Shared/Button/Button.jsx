import React from 'react';
import './button.scss';

function Button({text, gray}) {
    return (
        <button onClick={() => {
            alert('clicked');
          }} className={`button ${gray ? "gray" : ""}`}>
            {text}
        </button>
    )
}

export default Button
