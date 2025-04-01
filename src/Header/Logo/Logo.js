import React from "react";
import images from "../../images";
import "./Logo.css";

function Logo() {
    return (
        <a className="logo" href="/index.html">
            <img src={images.logo} alt="Logo" />
            <span>wotaku</span>
        </a>
    );
}
export default Logo;