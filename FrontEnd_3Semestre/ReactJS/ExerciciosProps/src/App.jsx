import "./App.css";
import Imagem from "./assets/hero.png";
import ImagemAluno from "./assets/hero.png";

import Loja from "./components/exercicio10/loja";
import Contato from "./components/exercicio08/contato"
import Mycomponent from "./components/children/mycomponent";
import Saudacao from "./components/exercecicio01/saudacao";
import Produto from "./components/exercicio02/produto";
import Perfil from "./components/exercicio03/perfil";
import Botao from "./components/exercicio04/botao";
import Filme from "./components/Exercicio05/filme";
import Aluno from "./components/exercicio06/aluno";
import Card from "./components/exercicio07/card";
import Jogo from "./components/exercicio09/jogo";

const App = () => {
  const pessoas = [
    {
      id: 1,
      nome: "Lucas Marinho",
      idade: 17,
      profissao: "Estudante",
    },

    {
      id: 2,
      nome: "Gustavo Augusto",
      idade: 18,
      profissao: "Marceneiro",
    },
  ];

  return (
    <>
      {/* {pessoas.map((p) => {
        return (
          <Perfil
            key={p.id}
            nome={p.nome}
            idade={p.idade}
            profissao={p.profissao}
          />
        );
      })} */}

      {/* <Saudacao nome="Francisco" />
      <Saudacao nome="Maria" />
      <Saudacao nome="Lucas" /> */}

      {/* <Mycomponent>
        <Produto
          nome="Oleo"
          preco={3.7283793}
          descricao="pao frances"
        />

        <Perfil
          nome="Joao Vitor"
          profissao="Engenheiro de software"
          idade="19"
        />

        <br />

        <Botao texto="clique aqui" cor="red" />

        <Filme
          titulo="Interestelar"
          ano="2018"
          genero="Ficção"
          descricao="Tudo gira em torno do murphy"
          nota={7.0}
        />

        <br />

        <Filme
          titulo="Carros"
          ano="2020"
          genero="Animação"
          descricao="Filme sobre carros"
          nota={9.0}
        />

        <br />

        <Filme
          titulo="Piratas"
          ano="2011"
          genero="Suspense"
          descricao="Filme sobre piratas sem física"
          nota={4.0}
        />
      </Mycomponent> */}

      {/* <Card>
        <Botao cor="red" texto="texto do botão" />
        <Botao cor="green" texto="texto do botão" />
      </Card>

      <Aluno
        nome="Hugo"
        idade="17"
        curso="Design"
        imagem={ImagemAluno}
      /> */}

     <Contato
  nome="Hugo"
  telefone="11999999999"
  email="hugo@gmail.com"
/>

      {/* 
      <Contato nome="Joao" numero="11997292014" email="joao@gmail.com" /> <br />

      <Contato nome="Lucas" numero="11983152780" email="Lucas@gmail.com" /> <br />

      <Contato nome="Marcos" numero="11123456789" email="Marcos@gmail.com" />
      */}

      {/* <Jogo
        nome="Elden Ring"
        plataforma="PC"
        preco={200}
        imagem={Imagem}
      /> */}

      <Loja
        nome="Molho"
        preco={5.5}
        categoria="Alimentício"
        estoque={0}
      />    </>
  );
};

export default App;