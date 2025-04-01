import React from "react";
import "./Header.css";
// Importing the Logo component
import Logo from "./Logo/Logo";
// Importing the SearchBtn component
import SearchBtn from "./SearchBtn/SearchBtn";
// Importing the NavBar component
import NavBar from "./NavBar/NavBar";
// Importing the Socials component
import Socials from "./Socials/Socials";
// Importing the Guide component
import Guide from "./Guide/Guide";

function Header() {
    return (
        <header className="header">
            <Logo />
            <SearchBtn />
            <NavBar />
            <Socials />
        </header>
    );
}

export default Header;