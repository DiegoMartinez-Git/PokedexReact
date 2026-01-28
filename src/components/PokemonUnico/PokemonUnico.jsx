
const PokemonUnico = (props) => {


    console.log(props.pokemonSeleccionado)

    return (
        <div>
            <h1>{props.pokemonSeleccionado.name.toUpperCase()}</h1>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.pokemonSeleccionadoID + ".png"} alt={props.pokemonSeleccionado.name} />
        </div>
    )
}

export default PokemonUnico