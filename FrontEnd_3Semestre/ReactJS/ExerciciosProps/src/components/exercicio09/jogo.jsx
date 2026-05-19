import "./jogo.css";

const Jogo = ({ nome, plataforma, preco, imagem }) => {
  return (
    <div className="card">
      <h2>Jogo</h2>

      <img src={imagem} alt={nome} className="imagem-jogo" />

      <div className="info">
        <strong>Nome:</strong> {nome}
      </div>

      <div className="info">
        <strong>Plataforma:</strong> {plataforma}
      </div>

      <div className="info">
        <strong>Preço:</strong> R$ {preco.toFixed(2)}
      </div>
    </div>
  );
};

export default Jogo;