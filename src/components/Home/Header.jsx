import React from "react";
import Logo from "./Logo/LOGO.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img className="logo" src={Logo} alt="Logo Kasa" />
            <nav className="navbar">
                <div className="nav_link">
                    <Link to="/">Acceuil</Link>
                    <Link className="aPropos" to="/A-Propos">A Propos</Link>
                </div>
            </nav>
        </header>
    )
};

export default Header;