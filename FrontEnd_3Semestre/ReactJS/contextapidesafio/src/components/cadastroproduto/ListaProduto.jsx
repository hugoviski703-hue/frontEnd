import { useContext } from "react";
import { ProdutoContext } from "../context/ProdutoCadastroContext";

const ListaProduto = () => {
  const { produtos } = useContext(ProdutoContext);

  return (
    <>
      <h2>Lista de Produtos</h2>

      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
    </>
  );
};

export default ListaProduto;