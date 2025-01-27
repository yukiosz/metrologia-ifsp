import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
    };

    return (
        <header className="header">
            <div className="header-left">
                <h1>Metrologia IFSP</h1>
            </div>
            <div className={`header-right ${isMenuOpen ? 'active' : ''}`}>
                <a href="#services">Serviços</a>
                <a href="#equipments">Equipamentos</a>
                <a href="#contact">Contato</a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;
