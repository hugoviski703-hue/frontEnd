// Importa o componente de rodapé
import Footer from "../../components/footer/Footer"

// Importa o componente de cabeçalho
import Header from "../../components/header/Header"

// Importa o CSS da página
import "./CadastroFilme.css"

// Importa componente de formulário
import Cadastro from "../../components/cadastro/Cadastro"

// Hooks do React
import { useEffect, useState } from "react"

// Configuração da API
import api from "../../services/services"

// Componente de lista
import Lista from "../../components/lista/Lista"

// SweetAlert
import Swal from "sweetalert2"

// Alerta personalizado
import { Alerta } from "../../components/alerta/Alerta"

const CadastroFilme = () => {

    // STATES E VARIÁVEIS


    const [valor, setValor] = useState("")
    const [listaFilmes, setListaFilmes] = useState([])
    const [listaGeneros, setListaGeneros] = useState([])
    const [genero, setGenero] = useState("")
    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false)
    const [imagem, setImagem] = useState(null)

    // CADASTRAR FILME

    const cadastrarFilme = async (e) => {

        e.preventDefault()

        // VALIDAÇÃO NOME
        if (valor.trim().length == 0) {

            Alerta({
                title: "Cadastro de filme",
                text: "Nome do filme deve ser preenchido",
                icon: "warning",
                confirmButtonText: "OK"
            })

            return false
        }

        // VALIDAÇÃO GÊNERO
        if (genero == "") {

            Alerta({
                title: "Cadastro de filme",
                text: "Selecione um gênero",
                icon: "warning",
                confirmButtonText: "OK"
            })

            return false
        }

        // OBJETO
        const formData = new FormData()

        formData.append("nome", valor)

        formData.append("idGenero", genero)

        formData.append("imagem", imagem)

        try {

            // POST API
            const retornoAPI = await api.post(
                "/Filme",
                formData
            )

            if (retornoAPI.status == 201) {

                Alerta({
                    title: "Cadastro de filme",
                    text: "Filme cadastrado com sucesso",
                    icon: "success",
                    confirmButtonText: "Ok"
                })

                limparFormulario()

                getFilmes()

            } else {

                Alerta({
                    title: "Cadastro de filme",
                    text: "Erro ao cadastrar filme",
                    icon: "error"
                })
            }

        } catch (error) {

            Alerta({
                title: "Cadastro de filme",
                text: "Erro na chamada da API",
                icon: "error"
            })

            console.log(error)
        }

        return false
    }

    // LIMPAR FORMULÁRIO

    const limparFormulario = () => {

        setValor("")

        setGenero("")

        setEditar(false)

        setIdEditar(0)
    }

    // EXCLUIR 
    const excluirFilme = async (item) => {

        const result = await Alerta({
            title: "Você tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d6a100ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Cancelar"
        })

        if (!result.isConfirmed) {
            return
        }

        try {

            await api.delete(`/Filme/${item.idFilme}`)

            // REMOVE DA LISTA
            const novaLista = listaFilmes.filter(
                filme => filme.idFilme !== item.idFilme
            )

            setListaFilmes(novaLista)

            Alerta({
                title: "Excluir Filme",
                text: "Filme excluído com sucesso!",
                icon: "success",
                confirmButtonText: "OK"
            })

        } catch (error) {

            console.log(error)

            Alerta({
                title: "Excluir Filme",
                text: "Erro ao excluir filme",
                icon: "error",
                confirmButtonText: "OK"
            })
        }
    }



    // =========================
    // PRÉ EDITAR
    // =========================
    const preEditar = (item) => {

        setIdEditar(item.idFilme)

        setValor(item.titulo)

        setGenero(item.idGenero)

        setEditar(true)

        console.log(item)
    }



    // =========================
    // EDITAR FILME
    // =========================
    const editarFilme = async (e) => {

        e.preventDefault();

        // VALIDAÇÃO
        if (valor.trim().length === 0) {

            Alerta({
                title: "Cadastro de filme",
                text: "Nome do filme deve ser preenchido",
                icon: "warning"
            });

            return false;
        }

        // VALIDAÇÃO GÊNERO
        if (genero === "") {

            Alerta({
                title: "Cadastro de filme",
                text: "Selecione um gênero",
                icon: "warning"
            });

            return false;
        }

        // FORMDATA
        const formData = new FormData();

        formData.append("idFilme", idEditar);
        formData.append("nome", valor);
        formData.append("idGenero", genero);

        if (imagem) {
            formData.append("imagem", imagem);
        }

        try {

            const retornoAPI = await api.put(
                `/Filme/${idEditar}`,
                formData
            );

            if (
                retornoAPI.status === 204 ||
                retornoAPI.status === 200
            ) {

                Alerta({
                    title: "Editar Filme",
                    text: "Filme editado com sucesso!",
                    icon    : "success",
                    confirmButtonText: "OK"
                });

                limparFormulario();

                getFilmes();
            }

        } catch (error) {

            console.log(error);

            Alerta({
                title: "Editar Filme",
                text: "Erro ao editar filme",
                icon: "error"
            });
        }
    };


    // =========================
    // useEffect
    // =========================
    useEffect(() => {

        getFilmes()

        getGeneros()

    }, [])



    // =========================
    // GET FILMES
    // =========================
    const getFilmes = async () => {

        try {

            const retornoAPI = await api.get("/Filme")

            console.log("FILMES DA API:")
            console.log(retornoAPI.data)

            const dados = retornoAPI.data

            setListaFilmes(dados)

        } catch (error) {

            console.log(error)
        }
    }



    // Executa ao carregar a página
    useEffect(() => {

        // Busca gêneros da API
        getGeneros()

    }, [])



    // =========================
    // GET GÊNEROS
    // =========================
    const getGeneros = async () => {

        try {

            // Busca dados da API
            const retornoAPI = await api.get("/Genero")

            // Extrai dados
            const dados = retornoAPI.data

            // Guarda no state
            setListaGeneros(dados)

        } catch (error) {

            // Aqui você poderia mostrar alerta também
            // alert("erro ao retorna os dados")
        }
    }


    return (
        <>

            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"
                    valor={valor}
                    setValor={setValor}
                    genero={genero}
                    setGenero={setGenero}
                    listaGeneros={listaGeneros}
                    setImagem={setImagem}
                    mostrarImagem={true}
                    cancelarEdicao={limparFormulario}
                    funcCadastro={
                        editar
                            ? editarFilme
                            : cadastrarFilme
                    }
                    btnEditar={editar}
                />


                <Lista
                    tituloLista="Lista de Filmes"

                    lista={listaFilmes}

                    tipoLista="filme"

                    funcExcluir={excluirFilme}

                    funcEditar={preEditar}
                />

            </main>

            <Footer />

        </>
    )
}
export default CadastroFilme