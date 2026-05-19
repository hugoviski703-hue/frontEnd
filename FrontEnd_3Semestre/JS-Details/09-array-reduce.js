const estoque = [
    {
        descricao : "Camisa Polo",
        cor  : "Verde",
        preco : 49.99,
        perfil : "M" ,
        quantidade: 10,
        promocao:false
    },

    {
        descricao : "Camisa Polo",
        cor  : "Amarela",
        preco : 29.99,
        perfil : "F" ,
        quantidade: 15,
        promocao:true
    },

    {
        descricao : "Camisa Polo",
        cor  : "Azul",
        preco : 29.99,
        perfil : "M" ,
        quantidade: 100,
        promocao:true
    },

    {
        descricao : "Camisa Polo",
        cor  : "Roxo",
        preco : 49.99,
        perfil : "F" ,
        quantidade: 5,
        promocao:false
    },

];


//reduz o array a um único elemento. 
let valorTotal = 0
let totalEstoque = estoque.reduce((total, produto) => {
    valorTotal += produto.preco * produto.quantidade
    return total + produto.quantidade;
}, 0);

console.log(`voce tem um total ${totalEstoque} produtos no estoque`);
console.log(`o valor total do produtos é ${valorTotal.toFixed(2)}`)

