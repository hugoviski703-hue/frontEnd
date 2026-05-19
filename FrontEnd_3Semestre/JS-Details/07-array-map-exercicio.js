const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    300,
    500,
    9876,
    99,
    134
];

//Rodar o map gerando um novo array com o dobro dos números do original
//após, exiba os valores do array dobro no console utilizando o foreach

console.log(`Array original: ${numeros}`);
//Usando o map
const novosNumeros = numeros.map((nn)=>{
    return nn * 2;
});
console.log(novosNumeros);

console.log(`Array modificado: `)
console.log();

//usando o foreach
let textoResulatado = "";
novosNumeros.forEach((numbs)=>{
    textoResulatado+= `${numbs} | `;//acumula texto em cada string ( sem pular linha)
});

//remover o último pipe
console.log(textoResulatado);//mostra o texto completo
// str.substring(0, str.length - 3);
textoResulatado = textoResulatado.substring(0, textoResulatado.length -1)