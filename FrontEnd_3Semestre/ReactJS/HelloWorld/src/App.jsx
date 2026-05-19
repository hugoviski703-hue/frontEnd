
import './App.css'
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/Title/title';

function App() {
  return(
   <>
    <Title  nome="hugo" sobrenome="ximenes" texto = "bem vindo"/>
    <Title texto ="eu sou outro titulo"/>
    <Paragrafo textoParagrafo = "paragrafo primario"/>
   </>
  );
}

export default App
//criar um componente title