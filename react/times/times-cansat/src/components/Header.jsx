import React, { useState } from 'react';

function Header() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header id="header">
            {}
            <button className="menu-hamburguer" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className="header">
                <div className="headerlogo">
                    {}
                    <img src="./Imagens/cansat_logo 1.png" alt="Logo CamSat" />
                </div>
                {}
                <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                    {}
                    <a href="home.html" className="link-home" onClick={() => setIsNavActive(false)}>Home</a>
                    <a href="sobre.html" className="link-sobre" onClick={() => setIsNavActive(false)}>Sobre</a>
                    <a href="times.html" className="link-times" onClick={() => setIsNavActive(false)}>Times</a>
                    <a href="contato.html" className="link-contato" onClick={() => setIsNavActive(false)}>Contato</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;