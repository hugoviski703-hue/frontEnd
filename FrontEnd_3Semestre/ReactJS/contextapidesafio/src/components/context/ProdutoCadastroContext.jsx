import { createContext, useState } from "react";

export const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <ProdutoContext.Provider
      value={{ produtos, adicionarProduto }}
    >
      {children}
    </ProdutoContext.Provider>
  );
};