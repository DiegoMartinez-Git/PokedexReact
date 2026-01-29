import { useEffect } from "react";
import usePokemons from "../../hooks/Pokemons/usePokemons";
import "./ListadoPokemon.css";
import { Link } from "react-router-dom";


const ListadoPokemon = ({ generacion }) => {

    const { pokemons, loading, obtenerGeneracionPokemon, obtenerPokemons } = usePokemons();

    useEffect(() => {
        if (generacion !== "todos") {
            obtenerGeneracionPokemon(generacion);
        } else {
            obtenerPokemons();
        }
    }, [generacion]);

    function crearRegistro(pokemon, index) {
        const id = pokemon.url.split('/').filter(Boolean).pop();
        return (
            <Link className="linkPokemon elementoPokemon" key={id} to={`/pokemon/${id}`}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
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