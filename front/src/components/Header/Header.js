import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-left">
                <a className='titleHeader' href="#">METROLOGIA ÓPTICA IFSP</a>
            </div>
            <div className={`header-right ${isMenuOpen ? 'active' : ''}`}>
                <a href="#services">Serviços</a>
                <a href="#equipments">Equipamento</a>
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
