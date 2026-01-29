const getGeneracionPokemon = (id) => {
    
    return fetch("https://pokeapi.co/api/v2/generation/" + id)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

export default getGeneracionPokemon