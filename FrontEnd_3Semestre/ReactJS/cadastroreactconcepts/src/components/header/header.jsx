import { Link } from "react-router-dom"
// import "./header.css"
export default function Header(){
     return(
        <header>
            <nav>
                <Link to="/">Home</Link> { " | " }
                <Link to="/quemsomos">Quem somos</Link>{ " | " }
                <Link to="/cadfrutas">frutas</Link>{ " | " }
                <Link to="/produtos">produtos</Link>
            </nav>
        </header>
     )
}