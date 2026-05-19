//Utilizado para filtrar um elemnto dentro de array, Retorna apenas o encontro, veja:
const numeros = [5, 10, 14, 50, 10, 900, 100, 10]

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});

const nomes = ["Walyson", "Davi", "Edu", "Laura", "Amy", "Felipe", "Gabriel", "Gabriela", "Fontes", "Nathan"];


// console.log(numeroEncontrado);
pessoasLetraN = nomes.filter((nome) =>{
    const primeiraLetra = nome.substring(0,1)//come;a no caracter zero e trás somente 1 caracter
    return primeiraLetra == "N" || primeiraLetra == "L"
});

console.log(pessoasLetraN)