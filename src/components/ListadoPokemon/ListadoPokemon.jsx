import usePokemons from "../../hooks/Pokemons/usePokemons";
import "./ListadoPokemon.css";
import { Link } from "react-router-dom";


const ListadoPokemon = () => {

    const { pokemons, loading} = usePokemons();

    function crearRegistro(pokemon, index) {
        return (
                <Link className="linkPokemon elementoPokemon" to={`/pokemon/${index + 1}`}>
                    <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
                        alt={pokemon.name} 
                    />
                    <span className="nombrePokemon">{pokemon.name}</span>
                </Link>
            
        )
    }



    return (
        <div>
            {loading ? <p>Cargando...</p> :
                        pokemons.map((pokemon, index) => crearRegistro(pokemon, index))}
        </div>
    )
}

export default ListadoPokemon