
import "./PokemonSeleccionado.css"

const PokemonSeleccionado = (props) => {

    console.log(props.pokemonSeleccionado)
    console.log(props.pokemonSeleccionadoId)





    return (
        <>
            <img className="pokemonSeleccionado" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.pokemonSeleccionadoId + ".png"} alt="" />
        </>
    )
}

export default PokemonSeleccionado