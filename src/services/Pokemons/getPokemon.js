const getPokemon = (id) => {

    return fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));


}
export default getPokemon