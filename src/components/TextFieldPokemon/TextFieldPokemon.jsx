import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const TextFieldPokemon = (props) => {

    const [pokemonBuscado, setPokemonBuscado] = useState("");

    function handleChange(event) {
        setPokemonBuscado(event.target.value);
        props.manejarPokemonBuscado(event.target.value);
    }

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="buscadorPokemon" label="Pokemon" variant="outlined" onChange={handleChange} />
        </Box>
    )
}

export default TextFieldPokemon