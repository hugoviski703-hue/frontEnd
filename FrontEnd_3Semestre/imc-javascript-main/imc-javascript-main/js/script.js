async function calcular() {
    // Pegando os valores dos campos de entrada
    const nome = document.getElementById("nome").value.trim();
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Validação
    if (nome.length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    console.log("Liberado para cadastrar");

    // Calculando IMC
    const imc = calcularIMC(peso, altura);
    console.log("IMC: " + imc);

    // Situação
    const textoSituacao = gerarSituacao(imc);
    console.log("Situação: " + textoSituacao);

    // Objeto
    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: imc,
        situacao: textoSituacao
    };

   
    const dadosGravados = await cadstrarNaAPI(objIMC);

    if (dadosGravados.error) {
        alert(dadosGravados.error);
        return;
    }
    else{    
        // Mostrar na tela (UMA VEZ SÓ)
        carregarCadastros();
    }

}

    async function carregarCadastros() {
        alert("Carregando os dados ...");

        const resposta = await fetch("http://localhost:3000/imc");

        const dados = await resposta.json();

        dados.sort((a, b) => {
          return  a.nome.localeCompare(b.nome);
        });

        console.log(dados);

        document.getElementById("cadastro").innerHTML = "";
         dados.forEach(item => {
            mostrarNaTela(item);
        });

    
}


async function cadstrarNaAPI(objCadastro) {
    try {
        const retorno = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        const dados = await retorno.json(); 
        return dados; 

    } catch (error) {
        console.log("Erro ao cadastrar na API: " + error);
        return await{
            error: "Erro ao cadastrar na API"
        };
    }
}

// Mostrar na tabela
function mostrarNaTela(objCadastro) {
    document.getElementById("cadastro").innerHTML += `
    <tr>
        <td>${objCadastro.nome}</td>
        <td>${objCadastro.altura}</td>
        <td>${objCadastro.peso}</td>
        <td>${objCadastro.imc.toFixed(2)}</td>
        <td>${objCadastro.situacao}</td>
    </tr>
    `;
}

// Cálculo IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Situação IMC
function gerarSituacao(imc) {
    if (imc < 16) {
        return "Magreza grave";
    } else if (imc < 17) {
        return "Magreza moderada";
    } else if (imc < 18.5) {
        return "Magreza leve";
    } else if (imc < 25) {
        return "Saudável";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade Grau I";
    } else if (imc < 40) {
        return "Obesidade Grau II (considerada severa)";
    } else {
        return "Obesidade Grau III (considerada mórbida)";
    }
}

