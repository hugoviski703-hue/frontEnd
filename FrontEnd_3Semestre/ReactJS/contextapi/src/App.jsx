
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Perfil from './components/perfil/perfil'
import Header from './components/header/header'
import Produto from './components/produto/Produto'
import CadastroProduto from './components/cadastrarproduto/CadastrarProduto'
import ListaProduto from './components/listarProdutos/ListarProdutos'
import PrivateRoute from "./routes/PrivateRoute";
function App() {

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      {/* ROTAS PUBLICAS */}
      <Route path='/' element={<Home/> }/>
      <Route path='/perfil'
       element={
       <Perfil/> }/>

   {/* ROTAS PRIVADAS */}
      <Route path='/produto'
       element={
        <PrivateRoute>
          <Produto/>
        </PrivateRoute>
        }
        />

      <Route path='/cadproduto'
       element={
        <PrivateRoute>
           <CadastroProduto/>
        </PrivateRoute>
      }
      />

      <Route path='/listaproduto'
       element={
        <PrivateRoute>
          <ListaProduto/>
        </PrivateRoute>
        }
        />
    </Routes>
   </BrowserRouter>
  )
}
      
export default App
	