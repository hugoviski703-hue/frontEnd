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

camisaF = estoque.filter((nome) => {
    return nome.perfil == "F"
});

console.log(camisaF);


let qtdPromo = 0
const camisaPromocao = estoque.filter((nome) => {
    if(nome.promocao == true){
        qtdPromo += nome.quantidade
    }
    return nome.promocao == true
});

console.log(camisaPromocao)

