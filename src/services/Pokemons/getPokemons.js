const getPokemons = () => {
    
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

export default getPokemons