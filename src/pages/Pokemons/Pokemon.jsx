import PokemonUnico from "../../components/PokemonUnico/PokemonUnico";
import { useParams } from "react-router-dom";
import usePokemons from "../../hooks/Pokemons/usePokemons";

const Pokemon = () => {
    const { id } = useParams();
    const { pokemons, loading } = usePokemons();

    // Mientras carga o no hay lista, mostramos cargando
    if (loading || !pokemons.length) {
        return <h1>Cargando...</h1>;
    }

    const pokemonEncontrado = pokemons.find((p, index) => index + 1 === parseInt(id));

    if (!pokemonEncontrado) return <h1>Pokemon no encontrado</h1>;

    return (
        <div>
            <PokemonUnico pokemonSeleccionadoID={parseInt(id)} pokemonSeleccionado={pokemonEncontrado} />
        </div>
    )
}

export default Pokemon