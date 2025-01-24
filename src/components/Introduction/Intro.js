import React from "react";
import './Intro.css';
import revEng from "../../assets/revEng.png";

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
                <h2>Conheça os equipamentos e as soluções do IFSP para metrologia e engenharia reversa do IFSP Campus Bragança Paulista</h2>
            </section>
        </>
    );
}

export default Intro;
