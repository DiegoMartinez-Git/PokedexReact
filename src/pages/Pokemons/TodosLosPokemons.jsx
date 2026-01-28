import ListaPokemon from "../../components/ListaPokemon/ListaPokemon"
import SelectorPokemon from "../../components/SelectorPokemon/SelectorPokemon"
import { useState } from "react";

const TodosLosPokemons = () => {

    const [pokemonSeleccionadoID, setPokemonSeleccionadoID] = useState(1);
    const [pokemonSeleccionadoImagen, setPokemonSeleccionadoImagen] = useState(null);

    function manejarPokemonSeleccionado(pokemon) {
        console.log(pokemon)
        setPokemonSeleccionadoID(pokemon)
        setPokemonSeleccionadoImagen(pokemon)
    }
    return (
        <div>
            <SelectorPokemon manejarPokemonSeleccionado={manejarPokemonSeleccionado} />
            <ListaPokemon pokemonSeleccionadoId={pokemonSeleccionadoID} pokemonSeleccionadoImagen={pokemonSeleccionadoImagen} />
        </div>
    )
}

export default TodosLosPokemons