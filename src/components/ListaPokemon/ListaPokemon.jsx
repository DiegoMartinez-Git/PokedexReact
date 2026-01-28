
const ListaPokemon = (props) => {
    return (
        <div>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.pokemonSeleccionadoId + ".png"}></img>{props.pokemonSeleccionadoId}    
        </div>
    )
}

export default ListaPokemon