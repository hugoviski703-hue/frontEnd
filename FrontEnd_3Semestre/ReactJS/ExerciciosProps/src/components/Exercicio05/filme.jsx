/* 05) Crie um componente chamado Filme que receba:
titulo
ano
genero
nota
Mostre todas as informações na tela.

Crie pelo menos 3 filmes diferentes */

import "./filme.css"

const Filme = ({titulo, ano, genero, descricao, nota}) =>{
    return(
        <p>
            titulo:{titulo} <br />
            ano: {ano} <br />
            genero: {genero} <br />
            descricao {descricao} <br />
            nota: {nota.toFixed(2)}
        </p>
    )
}

export default Filme;