import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UsuarioContext } from "../../context/UsuarioContext";

import { jwtDecode } from "jwt-decode";
import api from "../../services/services";
import { Alerta } from "../../components/alerta/Alerta";

const Login =  () => {

    
    const { setUsuario } = useContext(UsuarioContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    //validar login


    const realizarLogin = async (e) => {

    e.preventDefault();

    const dadosLogin = {
        email,
        senha
    };

    try {

        const retornoAPI = await api.post(
            "/login",
            dadosLogin
        );

        const token = retornoAPI.data.token;

        localStorage.setItem("token", token);

        const decoded = jwtDecode(token);

        setUsuario(decoded);

        localStorage.setItem(
            "usuario",
            JSON.stringify(decoded)
        );

        navigate("/filmes");

    } catch (error) {

        console.log(error);

        // alert("Email ou senha inválidos");
        Alerta({
            title: "Login",
            text: "Email ou senha inválidos",
            icon: "error",
            confirmButtonText: "OK"
        });
    }


};  
const verificaLogin = () => {
    const logado = JSON.parse(localStorage.getItem("usuario"));
    if (logado != undefined || logado  != null) {
        setUsuario(logado);
        navigate("/generos");
    }
    return false;
}

useEffect(() => {
    if (verificaLogin()) {
        return;
    }
}, []);

    return (
        <main className="main_login">

            <div className="banner"></div>

            <section className="section_login">

                <img
                    src={Logo}
                    alt="Logo do Filmoteca"
                />

                <form
                    className="form_login"
                    onSubmit={realizarLogin}
                >

                    <h1>Login</h1>

                    <div className="campos_login">

                        <div className="campo_input">

                            <label htmlFor="email">
                                Email:
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>

                        <div className="campo_input">

                            <label htmlFor="senha">
                                Senha:
                            </label>

                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    <Botao
                        nomeDoBotao="Entrar"
                    />


                </form>

            </section>

        </main>
    );
};

export default Login;