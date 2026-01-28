import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <ul>
            <li><Link to="/">Selector Pokemons</Link></li>
            <li><Link to="/buscador">Buscador Pokemon</Link></li>
            <li><Link to="/lista">Lista Pokemon</Link></li>
        </ul>
    )
}

export default Menu