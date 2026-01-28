import usePokemons from "../../hooks/Pokemons/usePokemons";

const BuscarPokemon = (props) => {

    const {pokemons} = usePokemons();

    return (
        <div>
            {pokemons.map((pokemon, index) => {
                if (pokemon.name.includes(props.pokemonBuscado)) {
                    return <img key={index} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"} alt={pokemon.name}></img>
                }
            })}
        </div>
    )
}

export default BuscarPokemon