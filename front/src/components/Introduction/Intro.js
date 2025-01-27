import React from "react";
import './Intro.css';
import revEng from "../../assets/reveng2.jpg";

function Intro() {
    return (
        <>
            <section className="intro-section">
                <div 
                    className="background-image" 
                    style={{
                        backgroundImage: `url(${revEng})`
                    }}
                />
                <h1 className="intro-title">Metrologia IFSP</h1>
                <h2>Conheça os equipamentos e as soluções para metrologia e engenharia reversa do IFSP Campus Bragança Paulista</h2>
            </section>
        </>
    );
}

export default Intro;
