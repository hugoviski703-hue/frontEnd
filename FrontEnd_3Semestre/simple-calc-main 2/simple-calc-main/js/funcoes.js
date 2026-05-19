async function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'
    }


    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;


/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}

////////////////////////////////////
const dados = {
    numero1 : n1,
    numero2 : n2,
    operacao : op,
    resultado : resultado
}

const dadosGravados = await cadastrar(dados);
if(dadosGravados) {
    alert('Dados gravados com sucesso!');
} else {
    mostrarNaTela();
}

}

async function carregar() {
    // x

    const response = await fetch('http://localhost:3000/calculadora');

    let data = await response.json();

       console.log(data); 
    
       document.getElementById("cadastro").innerHTML = '';
       data.forEach((dados) => {mostrarNaTela(dados);});      
}




async function cadastrar(dados) {

  try{
    const retorno = await fetch('http://localhost:3000/calculadora', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const progamn = await retorno.json();
    return progamn;

  } 
  catch(error) {
    console.error('Erro ao cadastrar dados:', error);
    return await{
        error: 'Erro ao cadastrar dados'
    };
  } 
  } 

//mostrar na tabela
async function mostrarNaTela(objCadastrado){
    document.getElementById("cadastro").innerHTML += `
    <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${objCadastrado.numero1}</span>
            <span><strong>Segundo Número:</strong> ${objCadastrado.numero2}</span>
            <span><strong>Operação:</strong> ${objCadastrado.operacao}</span>
            <span><strong>Resultado:</strong> ${objCadastrado.resultado}</span>
        </article>
    `

    carregar(objCadastrado);
}

window.onload = carregar;