import "./contato.css"

const Contato = ({nome, telefone, email}) =>{
    return(
        <p>
            nome:{nome} <br />
            telefone: {telefone} <br />
            email: {email}


        </p>
    );
}
export default Contato;