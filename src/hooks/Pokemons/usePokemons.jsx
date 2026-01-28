import { useEffect, useState } from "react";
import getPokemons from "../../services/Pokemons/getPokemons"
import getPokemon from "../../services/Pokemons/getPokemon"

const usePokemons = () => {

    const [pokemon, setPokemon] = useState(null);
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        obtenerPokemons();
    }, []);

    function obtenerPokemons() {

        setLoading(true);
        getPokemons()
            .then((data) => setPokemons(data.results))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    function obtenerPokemon(id) {
        setLoading(true);
        getPokemon(id)
            .then((data) => setPokemon(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }




    return {
        obtenerPokemons,
        obtenerPokemon,
        pokemon,
        pokemons,
        loading,
        error,
    }

}

export default usePokemons