import { BrowserRouter, Route, Routes } from "react-router-dom"

import { CadastroFilme } from "../pages/cadastroFilme/CadastroFilme"
import  CadastroGenero  from "../pages/cadastroGenero/CadastroGenero"
import Login from "../pages/login/Login"

export const Rotas = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<CadastroFilme />} path="/filmes" />
                <Route element={<CadastroGenero />} path="/generos" />
            </Routes>
        </BrowserRouter>
    )
}