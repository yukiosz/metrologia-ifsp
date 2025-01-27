import React from 'react';
import './Equipments.css';
import atosq from "../../assets/atos-q.avif";

const Equipments = () => {
  return (
    <section id="equipments" className="equipments-section">
      <h2 className="section-title">Equipamentos</h2>
      <div className="equipments-grid">
        <div className="equipment-card">
          <div className="equipment-image">
            <img src = {require("../../assets/atos-q.avif")} alt="Scanner 3D" />
          </div>
          <div className="equipment-content">
            <h3>Scanner 3D</h3>
            <p>
              Equipamento avançado para capturar digitalizações precisas de objetos em 3D,
              ideal para projetos de engenharia reversa e metrologia.
            </p>
          </div>
        </div>
        <div className="equipment-card">
          <div className="equipment-image">
            <img src={require("../../assets/engineering.jpg")} alt="Software de Análise de scans" />
          </div>
          <div className="equipment-content">
            <h3>Software para geração de relatórios completos</h3>
            <p>
              Ferramenta com as utilidades necessárias para geração de relatórios e gráficos completos com informações precisas.
            </p>
          </div>
        </div>
        <div className="equipment-card">
          <div className="equipment-image">
            <img src={require("../../assets/printer.jpg")} alt="Impressora 3D" />
          </div>
          <div className="equipment-content">
            <h3>Impressora 3D</h3>
            <p>
              Tecnologia para fabricação rápida de protótipos e peças, essencial para complementar o ciclo de engenharia reversa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipments;
