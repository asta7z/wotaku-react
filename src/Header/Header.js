import React, { useState, useEffect } from "react";
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
            <Logo />
            <SearchBtn />
            <NavBar />
            <Socials />
        </header>
    );
}

export default Header;