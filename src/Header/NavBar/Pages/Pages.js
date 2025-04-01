import React from "react"

function Pages({ title, submenu }) {

    return(
        <button className="menu">
            <span>{title}</span>
            <i className="fa fa-chevron-down"></i>
            <ul className="submenu">
                {submenu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </button>
    );
}

export default Pages