  import "./cardperfil.css"
  import people from "../../assets/react.svg"
  function Cardperfil() {
    return(

          <div className="card-perfil">
                { <img
          className="card-perfil__image"
          src={people}
          alt="foto de perfil do usuário"
        /> }
            </div>
    );
  }
  
export default Cardperfil;

// ReactJs
//Components
//Podem receber dados como parâmetros (props)
//Separar os componentes e montar nossa interface
//Com os componentes reutilizáveis