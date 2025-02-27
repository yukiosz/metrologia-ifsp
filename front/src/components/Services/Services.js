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
            Utilizando scanners 3D de última geração, oferecemos serviços de inspeção metrológica com alta precisão e eficiência, garantindo a máxima qualidade e conformidade das suas peças. A partir do escaneamento 3D, geramos uma nuvem de pontos detalhada, que é comparada diretamente com o modelo CAD 3D fornecido.
            </p>
            <img src={require("../../assets/CAD.jpg")} alt="Imagem CAD" />
            <p>CAD</p>
            <img className='small-image' src={require("../../assets/detalheStl.jpg")} alt="Detalhe do STL" />
            <p>Detalhe STL</p>
            <p>
            A diferença entre o modelo CAD e o modelo medido é visualizada de forma clara, por meio de mapas de cores ou seções, proporcionando uma análise visual de fácil interpretação.
            </p>
            <img src={require("../../assets/mapaDeCores.jpg")} alt="Mapa de cores" />
            <p>Mapa de cores</p>

            <img src={require("../../assets/detalheSeccao.png")} alt="Detalhe Secção" />
            <p>Detalhe Secção</p>

            <p>
             Além disso, realizamos a medição das cotas solicitadas e comparamos com o arquivo CAD 2D, sempre levando em conta as tolerâncias estabelecidas. Esse processo assegura um controle dimensional rigoroso, garantindo a verificação de conformidade e oferecendo resultados confiáveis e assertivos para otimizar a sua produção.
            </p>

          </div>
          <div className="service-card">
            <h3>Digitalização 3D para Engenharia Reversa</h3>
            <p>
            Oferecemos soluções avançadas de digitalização 3D, utilizando tecnologias de ponta para capturar geometrias complexas com altíssima precisão. Nossos serviços garantem a criação de modelos digitais detalhados e confiáveis, adequados tanto para impressão 3D quanto para aplicações em engenharia reversa. Com scanner de última geração, somos capazes de digitalizar peças, moldes e objetos de variados tamanhos e materiais, proporcionando resultados que atendem às necessidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </section>
    );
  };

  export default Services;
