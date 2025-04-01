import React from "react";

function Button(props) {
    return(
        <a href={props.url || '#'}>
            <i className={props.icon}></i>
        </a>
    )
}

export default Button