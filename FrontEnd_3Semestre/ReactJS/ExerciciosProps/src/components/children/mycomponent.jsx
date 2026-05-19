import "./mycomponent.css"

const Mycomponent = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>,

        <div className="botao">
            {props.children}
        </div>
    );
}



export default Mycomponent;