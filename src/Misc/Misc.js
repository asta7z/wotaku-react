import React, { useState, useEffect } from "react"
import "./Misc.css"
import ItemsMisc from "./Misc.json"
import MiscItem from "./MiscItem"

function Misc() {
    const [miscItems, setMiscItems] = useState([]);

    useEffect(() => {
        setMiscItems(ItemsMisc);
    }, []);

    return(
        <section className="misc">
            {miscItems.map((misc, index) => (
                <MiscItem key={index} title={misc.title} icon={misc.icon} discription={misc.discription} url={misc.url} />
            ))}
        </section>
    );
}

export default Misc