import usePokemons from "../../hooks/Pokemons/usePokemons";
import "./ListadoPokemon.css";



const ListadoPokemon = () => {

    const { pokemons, loading} = usePokemons();

    function crearRegistro(pokemon, index) {
        return (
            <div className="elementoPokemon">
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png"}></img>{pokemon.name}
            </div>
        )
    }



    return (
        <div>
            {loading ? <p>Cargando...</p> :
                        pokemons.map((pokemon, index) => crearRegistro(pokemon, index))}
        </div>
    )
}

export default ListadoPokemon