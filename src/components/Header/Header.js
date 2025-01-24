import React from 'react';
import styles from './Header.css';

function Header(){
    return(
        <>
            <header className="header">
            <div className="header-left">
                <h1>Metrologia IFSP</h1>
            </div>
            <nav className="header-right">
                <a href="#services">Serviços</a>
                <a href="#equipments">Equipamentos</a>
                <a href="#contact">Contato</a>
            </nav>
            </header>
        </>
    )
}

export default Header;