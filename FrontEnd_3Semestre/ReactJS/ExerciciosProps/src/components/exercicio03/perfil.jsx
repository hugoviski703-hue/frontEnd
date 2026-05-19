
// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.
import "./perfil.css";

const Perfil = ({ nome, idade, profissao }) => {
  return (
    <div className="card">
      <h2>Perfil</h2>

      <div className="info">
        <strong>Nome:</strong> {nome}
      </div>

      <div className="info">
        <strong>Idade:</strong> {idade}
      </div>

      <div className="info">
        <strong>Profissão:</strong> {profissao}
      </div>
    </div>
  );
};

export default Perfil;