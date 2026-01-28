import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import usePokemons from '../../hooks/Pokemons/usePokemons';
import { useState } from 'react';
import TextFieldPokemon from '../TextFieldPokemon/TextFieldPokemon';



const SelectorPokemon = (props) => {

    const pokemons = usePokemons();
    const [pokemonSeleccionadoID, setPokemonSeleccionadoID] = useState(1);


    function crearRegistro(pokemon, index) {
        return <MenuItem key={index} value={index + 1}>{pokemon.name}</MenuItem>
    }

    function handleChange(event) {
        setPokemonSeleccionadoID(event.target.value);
        props.manejarPokemonSeleccionado(event.target.value);
    }


    return (
        <>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pokemon</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pokemonSeleccionadoID}
                        label="Pokemon"
                        onChange={handleChange}
                    >

                        {pokemons.pokemons.map((pokemon, index) => crearRegistro(pokemon, index))}
                    </Select>
                </FormControl>
            </Box>
            

        </>
    )
}

export default SelectorPokemon
