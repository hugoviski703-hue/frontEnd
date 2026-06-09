import "./Header.css";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {

    const { usuario } = useContext(UsuarioContext);

    return (
        <header>
            <div className="layout_grid cabecalho">

                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/filmes">
                        Filme
                    </Link>

                    <Link className="link_header" to="/generos">
                        Gênero
                    </Link>

                    <Link className="link_header" to="/usuarios">
                        Usuário
                    </Link>
                </nav>

                <h2>
                    Bem vindo à Filmoteca,{" "}
                    {usuario ? usuario.nome : "Visitante"}
                </h2>

            </div>
        </header>
    );
};

export default Header;