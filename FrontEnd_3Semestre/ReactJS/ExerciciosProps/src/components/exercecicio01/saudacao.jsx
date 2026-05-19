
// 01) Crie um componente chamado Saudacao que receba uma prop chamada nome.

// O componente deve exibir a mensagem:
// Olá, [nome]! Seja bem-vindo(a)!
// Depois, utilize o componente 3 vezes passando nomes diferentes.



import "./saudacao.css"

const Saudacao = ({nome}) =>{
    return(
        <p>Olá, {nome}! Seja bem-vindo(a)!</p>
    )
}

export default Saudacao;