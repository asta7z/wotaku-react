import React, {useState, useEffect} from "react";
import '../NavBar/NavBar.css'
import Pages from "./Pages/Pages";
import ItemsData from './Pages/Items.json'

function NavBar() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(ItemsData);
    }, []);

    return(
        <div className="navigation">
            {menuItems.map((menu, index) => (
                <Pages key={index} title={menu.title} submenu={menu.submenu} />
            ))}
        </div>
    )
}

export default NavBar;