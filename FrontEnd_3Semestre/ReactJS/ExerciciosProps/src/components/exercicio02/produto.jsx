


// 02) Crie um componente chamado Produto que receba as seguintes props:
// nome
// preco
// descricao
// O componente deve exibir:

//    Nome do Produto
//    Preço: R$
//    Descrição do produto

// Crie pelo menos 3 produtos diferentes utilizando o componente.

import "./produto.css"

const Produto = ({nome, preco, descricao}) =>{
    return(
        <p>
            produto: {nome} <br />
            Preco: {preco.toFixed(2)} <br />
            descricao: {descricao}
        </p>
    );
}
export default Produto;