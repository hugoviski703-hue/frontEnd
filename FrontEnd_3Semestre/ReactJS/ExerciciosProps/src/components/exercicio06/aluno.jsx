import "./aluno.css"
const Aluno = ({nome, curso, imagem}) => {
    return(
       <p>
        nome: {nome} <br />
        curso: {curso} <br />
        <img src={imagem} alt={nome} />
       </p>
    );
}

export default Aluno;