import CadastroProduto from "./components/cadastroproduto/CadastroProduto";
import ListaProduto from "./components/cadastroproduto/ListaProduto";
import { ProdutoProvider } from "./components/context/ProdutoCadastroContext";

function App() {
  return (
    <ProdutoProvider>
      <CadastroProduto />
      <ListaProduto />
    </ProdutoProvider>
  );
}

export default App;