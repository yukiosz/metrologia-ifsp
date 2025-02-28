import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css';

  function Services(){
    return (
      <section id="services" className="services-section">
      <h2 className="section-title">Serviços</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Metrologia e Inspeção 3D</h3>
          <p>
          Oferecemos soluções avançadas de digitalização 3D, utilizando tecnologias de ponta para capturar geometrias complexas com altíssima precisão. Nossos serviços garantem a criação de modelos digitais detalhados e confiáveis, adequados tanto para impressão 3D quanto para aplicações em engenharia reversa. Com scanner de última geração, somos capazes de digitalizar peças, moldes e objetos de variados tamanhos e materiais, proporcionando resultados que atendem às necessidades específicas de cada cliente.
          </p>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div>
              <img className="carousel-image" src={require("../../assets/CAD.jpg")} alt="Imagem CAD" />
              <p className="legend">CAD</p>
            </div>
            <div>
              <img className="carousel-image" src={require("../../assets/detalheStl.jpg")} alt="Detalhe do STL" />
              <p className="legend">Detalhe STL</p>
            </div>
            <div>
              <img className="carousel-image" src={require("../../assets/mapaDeCores.jpg")} alt="Mapa de cores" />
              <p className="legend">Mapa de cores</p>
            </div>
            <div>
              <img className="carousel-image" src={require("../../assets/detalheSeccao.png")} alt="Detalhe Secção" />
              <p className="legend">Detalhe Secção</p>
            </div>
          </Carousel>
        </div>

        <div className="service-card">
          <h3>Digitalização 3D para Engenharia Reversa</h3>
          <p>
          Utilizando scanners 3D de última geração, oferecemos serviços de inspeção metrológica com alta precisão e eficiência, garantindo a máxima qualidade e conformidade das suas peças. A partir do escaneamento 3D, geramos uma nuvem de pontos detalhada, que é comparada diretamente com o modelo CAD 3D fornecido. A diferença entre o modelo CAD e o modelo medido é visualizada de forma clara, por meio de mapas de cores ou seções, proporcionando uma análise visual de fácil interpretação. Além disso, realizamos a medição das cotas solicitadas e comparamos com o arquivo CAD 2D, sempre levando em conta as tolerâncias estabelecidas. Esse processo assegura um controle dimensional rigoroso, garantindo a verificação de conformidade e oferecendo resultados confiáveis e assertivos para otimizar a sua produção
          </p>
          <Carousel className='carousel-video' showThumbs={false} infiniteLoop autoPlay>
            <div>
              <video className="carousel-item" controls>
                <source src={require("../../assets/peca.mp4")} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <p className="legend">Digitalização de peça automotiva</p>
            </div>
            <div>
              <video className="carousel-item" controls>
                <source src={require("../../assets/elipse.mp4")} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <p className="legend">Digitalização de peça detalhada</p>
            </div>
            <div>
              <video className="carousel-item" controls>
                <source src={require("../../assets/sinuca.mp4")} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <p className="legend">Digitalização de mesa de sinuca</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
    );
  };

  export default Services;
