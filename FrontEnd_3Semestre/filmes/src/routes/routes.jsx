//instalar o pacote react-router-dom 

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import Login from "../pages/login/Login"


const Rotas = () =>{
    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Login </Link> {""}
            <Link to="/filme">Filmes </Link> {""}
            <Link to="/genero">Generos </Link> {""}
        </nav>

        <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<CadastroFilme/>} path="/filme"/>
            <Route element={<CadastroGenero/>} path="/genero"/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas