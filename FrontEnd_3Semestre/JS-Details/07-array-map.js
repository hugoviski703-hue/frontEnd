const hobbies =
[
    "Correr", 
    "Ler", 
    "Viajar", 
    "Cozinhar", 
    "Fotografar", 
    "Jogar videogame", 
    "Pintar", 
    "Escrever", 
    "Dançar", 
    "Nadar"
];

// Utilzado para iterar arrays e retornar um novo array, compondo um novo resultado para cada índice do array antigo, veja:

const novoshobbies = hobbies.map((hob) =>{
    return `<p>${hob}</p>`;
});

console.log(novoshobbies);