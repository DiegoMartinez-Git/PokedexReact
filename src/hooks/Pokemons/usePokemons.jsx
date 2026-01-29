import { useEffect, useState } from "react";
import getPokemons from "../../services/Pokemons/getPokemons"
import getGeneracionPokemon from "../../services/Pokemons/getGeneracionPokemon";
import getGeneraciones from "../../services/Pokemons/getGeneraciones";

const usePokemons = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [generaciones, setGeneraciones] = useState([]);


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

    function obtenerGeneracionPokemon(id) {
        setLoading(true);
        getGeneracionPokemon(id)
            .then((data) => setPokemons(data.pokemon_species))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    function obtenerGeneraciones() {
        setLoading(true);
        getGeneraciones()
            .then((data) => setGeneraciones(data.results))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        obtenerGeneraciones();
    }, []);

    return {
        obtenerPokemons,
        obtenerGeneracionPokemon,
        obtenerGeneraciones,
        pokemons,
        loading,
        error,
        generaciones,
    }

}

export default usePokemons