import React from "react"

function MiscItem({ title, discription, icon, url }) {
    return(
        
        <a href={url}>
            <div className="icon">
                <i className={icon}></i>
            </div>
            <span>{title}</span>
            <p>{discription}</p>
        </a>
    )
}

export default MiscItem