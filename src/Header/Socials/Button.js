import React from "react"

function Button(props) {
    return(
        <a target={props.blank == 1 ? "_blank" : ""} href={props.url || '#'}>
            <i className={props.icon}></i>
        </a>
    )
}

export default Button