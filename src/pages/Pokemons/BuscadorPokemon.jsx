import BuscarPokemon from "../../components/BuscarPokemon/BuscarPokemon";
import TextFieldPokemon from "../../components/TextFieldPokemon/TextFieldPokemon";
import { useState } from "react";

const BuscadorPokemon = () => {

    const [pokemonBuscado, setPokemonBuscado] = useState("");

    function manejarPokemonBuscado(pokemon) {
        setPokemonBuscado(pokemon);
    }

    return (
        <div>
            <h1>Buscador Pokemon</h1>
            <TextFieldPokemon manejarPokemonBuscado={manejarPokemonBuscado} />
            <BuscarPokemon pokemonBuscado={pokemonBuscado} />

        </div>
    )
}

export default BuscadorPokemon