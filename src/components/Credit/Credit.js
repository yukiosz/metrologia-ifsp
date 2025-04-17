import './Credit.css'

function Credit() {
    return (
      <section className="credit-section">
        <h2>
          Laboratório financiado a partir da CHAMADA PÚBLICA MCTI/FINEP/FNDCT/CT-VERDE AMARELO - LABORATÓRIOS ABERTOS DE PROTOTIPAGEM E ESPAÇOS COMPARTILHADOS - 01/2022
        </h2>
        <div className="credit-logos">
          <img src={require("../../assets/ifspBraMarca.png")} alt="Marca Logo IFSP" />
          <img src={require("../../assets/finepMarca.png")} alt="Marca Logo FINEP" />
        </div>
      </section>
    );
  }
  
  export default Credit;
  