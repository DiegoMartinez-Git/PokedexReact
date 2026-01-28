import { useEffect, useState } from "react";
import getPokemons from "../../services/Pokemons/getPokemons"

const usePokemons = () => {

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


    return {
        obtenerPokemons,
        pokemons,
        loading,
        error,
    }

}

export default usePokemons