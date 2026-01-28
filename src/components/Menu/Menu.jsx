import { Link } from "react-router-dom"
import "./menu.css"

const Menu = () => {
    return (
        <ul className="menu">
            <li ><Link to="/" className="link">Selector Pokemons</Link></li>
            <li ><Link to="/buscador" className="link">Buscador Pokemon</Link></li>
            <li ><Link to="/lista" className="link">Lista Pokemon</Link></li>
        </ul>
    )
}

export default Menu