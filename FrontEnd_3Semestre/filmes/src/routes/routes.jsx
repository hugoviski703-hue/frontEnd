import { BrowserRouter, Route, Routes } from "react-router-dom"

import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"
import Login from "../pages/login/Login"
import PrivateRoute from "./PrivateRoute"

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route
                    path="/filmes"
                    element={
                        <PrivateRoute>
                            <CadastroFilme />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/generos"
                    element={
                        <PrivateRoute>
                            <CadastroGenero />
                        </PrivateRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    )
}