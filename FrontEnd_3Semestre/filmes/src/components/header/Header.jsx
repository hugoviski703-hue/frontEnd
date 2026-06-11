import "./Header.css";
import Logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Header = () => {

    const { usuario, setUsuario } = useContext(UsuarioContext);

    const navigate = useNavigate();

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    const logout = () => {

        localStorage.removeItem("usuario");
        localStorage.removeItem("dadosLogin");

        setUsuario(null);

        navigate("/");
    };

    return (
        <header>
            <div className="layout_grid cabecalho">

                <Link to="/">
                    <img
                        src={Logo}
                        alt="Logo do Filmoteca"
                    />
                </Link>

                <nav className="nav_header">

                    <Link
                        className="link_header"
                        to="/filmes"
                    >
                        Filme
                    </Link>

                    <Link
                        className="link_header"
                        to="/generos"
                    >
                        Gênero
                    </Link>

                </nav>

                {/* <h2>
                    {usuario
                        ? `Olá, ${usuario.nome}`
                        : "Visitante"}
                </h2> */}

            {/* botao dark mode */}
                <button
                    type="button"
                    className="btn_theme"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
                </button>

                <button
                    type="button"
                    className="btn_logout"
                    onClick={logout}
                >
                    Sair
                </button>

            </div>
        </header>
    );
};

export default Header;