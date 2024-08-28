import React from "react";
import Logo from "./Logo/LOGO.svg";

const Header = () => {
    return (
        <header>
            <img className="logo" src={Logo} alt="Logo Kasa" />
            <nav>
                <ul className="liste">
                    <li><a href="#Accueil">Accueil</a></li>
                    <li className="aPropos"><a href="#Apropos">À propos</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;