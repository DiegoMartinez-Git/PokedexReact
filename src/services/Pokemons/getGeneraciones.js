const getGeneraciones = () => {
    
    return fetch("https://pokeapi.co/api/v2/generation/")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

export default getGeneraciones