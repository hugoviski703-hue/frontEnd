import { useContext } from "react"
import { useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    //context - destructing
    const { usuario, setUsuario } = useContext(UsuarioContext)//state local

    const [novoUsuario, setNovoUsuario] = useState()//state local

    //ciclo de vida e funções
    //guarda o usuário no localStorage  no formato JSON
    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setUsuario(novoUsuario)
        setNovoUsuario("")//limpa os dados do formulário
    }
    //jsx
    return (
        <div>
            <h2>Página de Perfil ({usuario})</h2>

            <input
            
                type="text"
                placeholder="Digite o nome do usuário"
                value={novoUsuario}
                onChange={(e) =>{
                    setNovoUsuario(e.target.value)
                }}
            />


            <button
                onClick={() => {
                    login()
                }}
            >Entrar</button>
            <p>Novo Usuário: {novoUsuario}</p>
        </div>


    )
}
export default Perfil