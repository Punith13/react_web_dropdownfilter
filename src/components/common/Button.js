import React from 'react'; 

const Button = (props) => {
    return (
        <div>
            <button style={props.style} onClick={props.onClick} >{props.label} <i className={props.icon}></i></button>
        </div>
        
    );
};

export { Button }
