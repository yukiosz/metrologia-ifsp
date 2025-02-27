import React from 'react';
import './Equipments.css';

function  Equipments(){
  return (
    <section id="equipments" className="equipments-section">
      <h2 className="section-title">Equipamento</h2>
      <div className="equipments-grid">
        <div className="equipment-card">
          <div className="equipment-image">
            <img src = {require("../../assets/atos-q.avif")} alt="Scanner 3D" />
          </div>
          <div className="equipment-content">
            <h3>Scanner 3D</h3>
            <p>
            O ATOS Q é um scanner 3D industrial de alta precisão, projetado para atender a uma ampla variedade de aplicações, graças à sua versatilidade nas áreas de medição. Reconhecidos em diversos setores, o scanner ATOS se destaca como soluções de medição 3D ópticas líderes de mercado. Seu sucesso é fundamentado em uma combinação de optoeletrônica de precisão, design robusto e software avançado, que garantem resultados consistentes e confiáveis.
            </p>
            <p>
            O ATOS Q oferece a capacidade de realizar medições em uma vasta gama de materiais, como peças de chapa metálica, componentes fundidos, cerâmicas, polímeros e vidro, entre outros. O sistema é equipado com um conjunto de lentes que possibilita a medição de áreas variando de 100 x 70 mm² a 500 x 370 mm². Com uma precisão excepcional de até 0,008 mm, o ATOS Q   garante a excelência na medição de peças e componentes com alto nível de detalhe e confiança.
            </p>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Equipments;
