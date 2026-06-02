// Importa o componente de rodapé
import Footer from "../../components/footer/Footer"

// Importa o componente de cabeçalho
import Header from "../../components/header/Header"

// Importa o arquivo CSS da página
import "./CadastroGenero.css"

// Importa o componente de formulário reutilizável
import Cadastro from "../../components/cadastro/Cadastro"

// Importa hooks do React
import { useEffect, useState } from "react"

// Importa configuração da API (axios)
import api from "../../services/services"

// Importa componente de lista
import Lista from "../../components/lista/Lista"

// Biblioteca SweetAlert2
import Swal from "sweetalert2"

// Importa alerta personalizado
import { Alerta } from "../../components/alerta/Alerta"


// COMPONENTE PRINCIPAL
const CadastroGenero = () => {

    // =========================
    // STATES E VARIÁVEIS
    // =========================

    // Guarda o valor digitado no input
    const [valor, setValor] = useState("")

    // Guarda todos os gêneros vindos da API
    const [listaGeneros, setListaGeneros] = useState([])

    // Guarda o ID do gênero que será editado
    const [idEditar, setIdEditar] = useState(0)

    // Controla se está editando ou cadastrando
    const [editar, setEditar] = useState(false)



    // =========================
    // CADASTRAR GÊNERO
    // =========================
    const cadastrarGenero = async (e) => {

        // Impede o recarregamento da página
        e.preventDefault()

        // =========================
        // VALIDAÇÃO
        // =========================

        // trim() remove espaços vazios
        if (valor.trim().length == 0) {

            // Exibe alerta personalizado
            Alerta({
                title: "Cadastro de gênero",
                text: "Gênero deve ser preenchido",
                icon: "warning",
                confirmButtonText: "Ok"
            })

            return false
        }

        // Objeto enviado para API
        const objCadastro = {
            nome: valor
        }

        try {

            // Faz POST na API
            const retornoAPI = await api.post("/Genero", objCadastro)

            // Se cadastrou corretamente
            if (retornoAPI.status == 201) {

                Alerta({
                    title: "Cadastro de gênero",
                    text: "Gênero cadastrado com sucesso",
                    icon: "success",
                    confirmButtonText: "Ok"
                })

                // Limpa formulário
                limparFormulario()

                // Atualiza lista
                getGeneros()

            } else {

                // Caso dê erro
                Alerta({
                    title: "Cadastro de gênero",
                    text: "Houve algum probelema ao cadastrar!!",
                    icon: "error"
                })
            }

        } catch (error) {

            Alerta({
                title: "Cadastro de gênero",
                text: "Erro na chamada da API",
                icon: "error"
            })

            console.log(error)
        }

        return false
    }



    // =========================
    // LIMPAR FORMULÁRIO
    // =========================
    const limparFormulario = () => {

        // Limpa input
        setValor("")

        // Sai do modo edição
        setEditar(false)

        // Remove ID selecionado
        setIdEditar(0)
    }



    // =========================
    // EXCLUIR GÊNERO
    // =========================
    const excluirGenero = async (item) => {

        // Exibe confirmação
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

        // Se cancelar, para função
        if (!result.isConfirmed) {
            return
        }

        try {

            // Faz DELETE na API
            await api.delete(`/Genero/${item.idGenero}`)

            // Remove item da lista sem precisar buscar API novamente
            const novaLista = listaGeneros.filter(
                genero => genero.idGenero !== item.idGenero
            )

            // Atualiza state
            setListaGeneros(novaLista)

            // Mensagem de sucesso
            Alerta({
                title: "Excluir Gênero",
                text: "Gênero excluído com sucesso!",
                icon: "success",
                confirmButtonText: "OK"
            })

        } catch (error) {

            console.log(error)

            // Mensagem de erro
            Alerta({
                title: "Excluir Gênero",
                text: "Erro ao excluir o gênero :(",
                icon: "error",
                confirmButtonText: "OK"
            })
        }
    }



    // =========================
    // CANCELAR EDIÇÃO
    // =========================
    const cancelarPreEditar = () => {

        // Apenas limpa formulário
        limparFormulario()
    }



    // =========================
    // PRÉ-EDIÇÃO
    // =========================
    const preEditar = (item) => {

        // Guarda ID do item
        setIdEditar(item.idGenero);

        // Coloca nome no input
        setValor(item.nome);

        // Ativa modo edição
        setEditar(true);

        console.log(item);
    };



    // =========================
    // EDITAR GÊNERO
    // =========================
    const editarGenero = async (item) => {

        // =========================
        // VALIDAÇÃO
        // =========================
        if (valor.trim().length == 0) {

            Alerta({
                title: "Cadastro de gênero",
                text: "Gênero deve ser preenchido",
                icon: "warning"
            })

            return false
        }

        // Objeto enviado para API
        const objCadastro = {
            idGenero: idEditar,
            nome: valor
        }

        try {

            // Faz PUT na API
            const retornoAPI = await api.put(
                `/Genero/${idEditar}`,
                objCadastro
            )

            // Atualiza item da lista
            if (item.idGenero == idEditar) {

                return objCadastro
            }

            return item

        } catch (error) {

            // Exibe erro
            Swal.fire({
                title: "Cadastro de gênero",
                text: "Erro na chamada da API",
                icon: "error"
            })

            console.log(error)
        }
    }



    // =========================
    // useEffect
    // =========================

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



    // =========================
    // JSX (HTML DO COMPONENTE)
    // =========================
    return (
        <>

            {/* Cabeçalho */}
            <Header />

            <main>

                {/* COMPONENTE DE FORMULÁRIO */}
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    mostrarImagem={false}
                    funcCadastro={
                        editar
                            ? editarGenero
                            : cadastrarGenero
                    }
                    btnEditar={editar}
                />

                {/* COMPONENTE DE LISTA */}
                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    // Lista recebida da API
                    lista={listaGeneros}

                    // Tipo da lista
                    tipoLista="genero"

                    // Função excluir
                    funcExcluir={excluirGenero}

                    // Função editar
                    funcEditar={preEditar}
                />

            </main>

            {/* Rodapé */}
            <Footer />
        </>
    )
}

// Exporta componente
export default CadastroGenero