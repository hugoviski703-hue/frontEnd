import { useContext } from "react"
import { useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    //context - destructing
    const { usuario, setUsuario } = useContext(UsuarioContext)//state local

    const [novoUsuario, setNovoUsuario] = useState()//state local

    //ciclo de vida e funções

    //jsx
    return (
        <div>
            <h2>Página de Perfil ({usuario})</h2>

            <input
            
                type="text"
                placeholder=""
                onChange={(e) =>{
                    setNovoUsuario(e.target.value)
                }}
            />


            <button
                onClick={() => {
                    setUsuario(novoUsuario)
                }}
            >Trocar Usuário</button>
            <p>Novo Usuário: {novoUsuario}</p>
        </div>


    )
}
export default Perfil