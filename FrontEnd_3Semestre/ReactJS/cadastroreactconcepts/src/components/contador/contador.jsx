import { useState } from "react";
import "./contador.css";

const Contador = () => {
    const [valor, setValor] = useState(0);

    function incremento () {
        
       
        if (valor >= 10){
            setValor(0)
        }
        else{
            setValor(valor + 1)
        }
    }

    function Decremento (){
       

         if (valor > 0) {
              setValor(valor - 1)
         }
    }


    //criar uma funcao decremento
    //toda vez que o contador chegar em 10 deve reiniciar
    //o contador não pode fazer contagem negativa
    return (
        <>
            <p>Contagem: {valor}</p>

            <button
                onClick= {incremento}>Aumentar</button>  
                Aumentar

              <button
                onClick= {Decremento}>Diminuir</button>  
                
        </>
    );
};

export default Contador;