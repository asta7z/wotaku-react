import React from "react"
import './Socials.css'
import icons from "./icons"
import Button from "./Button"
import { GetLinkByName } from "./GetLinkByName"

function Socials() {

    return(
        <div className="socials">
            <Button blank = {1} url = {GetLinkByName("GitHub")} icon = {icons.github} />
            <Button blank = {1} url = {GetLinkByName("Twitter")} icon = {icons.twitter} />
            <Button url = {GetLinkByName("Discord")} icon = {icons.discord} />
            <Button blank = {1} url = {GetLinkByName("Facebook")} icon = {icons.facebook} />
            <Button blank = {1} url = {GetLinkByName("Instagram")} icon = {icons.instagram} />
        </div>
    )
}<<

export default Socials;