import { useState } from "react";
import ListadoPokemon from "../../components/ListadoPokemon/ListadoPokemon"
import SelectorGeneraciones from "../../components/SelectorGeneraciones/SelectorGeneraciones";
import usePokemons from "../../hooks/Pokemons/usePokemons";

const ListaPokemon = () => {

    const { generaciones } = usePokemons();

    const [seleccionado, setSeleccionado] = useState(false);

    function manejarGeneracionSeleccionada(seleccionado) {
        setSeleccionado(seleccionado);
    }

    return (
        <div>
            <h1>Lista Pokemon</h1>
            <SelectorGeneraciones generaciones={generaciones} manejarGeneracionSeleccionada={manejarGeneracionSeleccionada} />
            <ListadoPokemon generacion={seleccionado} />

        </div>
    )
}

export default ListaPokemon