import PokemonSeleccionado from "../../components/PokemonSeleccionado/PokemonSeleccionado.jsx"
import SelectorPokemon from "../../components/SelectorPokemon/SelectorPokemon"
import { useState } from "react";
import usePokemons from "../../hooks/Pokemons/usePokemons";

const TodosLosPokemons = () => {

    const [pokemonSeleccionadoID, setPokemonSeleccionadoID] = useState(1);


    function manejarPokemonSeleccionado(pokemon) {
        setPokemonSeleccionadoID(pokemon)
    }
    const { pokemons, loading } = usePokemons();

    if (loading || !pokemons.length) {
        return <h1>Cargando...</h1>;
    }

    const pokemonEncontrado = pokemons.find((p, index) => index + 1 === parseInt(pokemonSeleccionadoID));

    if (!pokemonEncontrado) return <h1>Pokemon no encontrado</h1>;
    
    return (
        <div>
            <SelectorPokemon manejarPokemonSeleccionado={manejarPokemonSeleccionado} />
            <PokemonSeleccionado pokemonSeleccionadoId={parseInt(pokemonSeleccionadoID)} pokemonSeleccionado={pokemonEncontrado} />
        </div>
    )
}

export default TodosLosPokemons