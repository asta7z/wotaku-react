import React from "react";
import './Socials.css';
import icons from "./icons";
import Button from "./Button";

function Socials() {
    return(
        <div className="socials">
            <Button url = "https://github.com/asta7z/" icon = {icons.github} />
            <Button icon = {icons.twitter} />
            <Button icon = {icons.discord} />
            <Button icon = {icons.facebook} />
            <Button icon = {icons.instagram} />
        </div>
    )
}

export default Socials;