// Loja.jsx
import "./loja.css";

const Loja = ({ nome, preco, categoria, estoque }) => {
    return (
        <div className="loja">
            <p>
                Nome: {nome} <br />
                Preço: R$ {preco.toFixed(2)} <br />
                Categoria: {categoria} <br />
                Estoque: {estoque} <br />

                {estoque > 0
                    ? "Produto disponível"
                    : "Produto indisponível"}
            </p>
        </div>
    );
};

export default Loja;