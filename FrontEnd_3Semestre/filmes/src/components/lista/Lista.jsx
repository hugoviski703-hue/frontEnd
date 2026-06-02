import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";
import faltadecartaz from "../../assets/img/faltadecartaz.jpg";

const Lista = (props) => {
    return (
        <section className="layout_grid">
            <div className="listagem">

                <h1>{props.tituloLista}</h1>
                <hr />

                <div className="tabela">
                    <table>

                        {/* CABEÇALHO */}
                        <thead>
                            <tr className="table_cabecalho">
                                <th style={{ display: props.visibilidade }}>Imagem</th>
                                <th>Nome</th>

                                {/* só mostra gênero quando for lista de filme */}
                                <th style={{ display: props.visibilidade }}>
                                    Gênero
                                </th>

                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        {/* CORPO */}
                        <tbody>

                            {props.lista && props.lista.length > 0 ? (

                                props.lista.map((item) => (

                                    // IMPORTANTE:
                                    // filme usa idFilme
                                    // genero usa idGenero
                                    <tr
                                        className="item_lista"
                                        key={
                                            props.tipoLista === "filme"
                                                ? item.idFilme
                                                : item.idGenero
                                        }
                                    >

                                        <td data-cell="Imagem" style={{ display: props.visibilidade }}>
                                            {/* Segunda célula: mostra o nome do gênero caso o tipo da lista seja "filme".*/}
                                            {/* adicionar essa linha depois de fazer o metd de lista filme: */}
                                            <img className="img_cartaz" src={(`https://localhost:7121/imagens/${item.imagem}` == `https://localhost:7121/imagens/` || `https://localhost:7121/imagens/${item.imagem}` == `https://localhost:7121/imagens/null` || `https://localhost:7121/imagens/${item.imagem}` == `https://localhost:7121/imagens/undefined`) ? faltadecartaz : `https://localhost:7121/imagens/${item.imagem}`} alt="Imagem" />
                                        </td>
                                        {/* NOME */}

                                        <td data-cell="Nome">

                                            {
                                                props.tipoLista === "genero"
                                                    ? item.nome
                                                    : item.titulo
                                            }

                                        </td>

                                        {/* GÊNERO */}
                                        <td
                                            data-cell="Gênero"
                                            style={{ display: props.visibilidade }}
                                        >

                                            {
                                                props.tipoLista === "filme"
                                                    ? (
                                                        item.idGeneroNavigation?.nome
                                                        || item.genero?.nome
                                                        || "-"
                                                    )
                                                    : "-"
                                            }

                                        </td>

                                        {/* EDITAR */}
                                        <td data-cell="Editar">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcEditar(item)}
                                            >
                                                <img src={Editar} alt="Caneta" />
                                            </button>
                                        </td>

                                        {/* EXCLUIR */}
                                        <td data-cell="Excluir">
                                            <button
                                                className="icon"
                                                onClick={() => props.funcExcluir(item)}
                                            >
                                                <img src={Excluir} alt="Lixeira" />
                                            </button>
                                        </td>

                                    </tr>
                                ))

                            ) : (

                                <tr>
                                    <td colSpan="4">
                                        Nenhum registro encontrado.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    )
}

export default Lista;