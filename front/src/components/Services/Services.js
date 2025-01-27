import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Serviços</h2>
      <div className="services-grid">
      <div className="service-card">
          <h3>Metrologia e Inspeção 3D</h3>
          <p>
            Realizamos medições precisas e inspeções tridimensionais utilizando tecnologias modernas para garantir a 
            qualidade de produtos e processos.
          </p>
        </div>
        <div className="service-card">
          <h3>Digitalização 3D</h3>
          <p>
            Oferecemos soluções avançadas de digitalização 3D para capturar geometrias complexas com alta precisão, 
            garantindo modelos detalhados e confiáveis.
          </p>
        </div>
        <div className="service-card">
          <h3>Engenharia Reversa</h3>
          <p>
            Desenvolvemos projetos de engenharia reversa para recriar peças ou modelos a partir de objetos existentes, 
            auxiliando na inovação e na produção.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
