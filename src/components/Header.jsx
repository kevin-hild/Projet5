import React from "react";
import Logo from "../assets/Logo/LOGO.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation(); // Obtenir l'URL actuelle

    return (
        <header>
            <h1>
            <img className="logo" src={Logo} alt="Logo Kasa" />
            </h1>
            <nav className="navbar">
                <div className="nav_link">
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/A-Propos"
                        className={location.pathname === "/A-Propos" ? "active" : ""}
                    >
                        A Propos
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
