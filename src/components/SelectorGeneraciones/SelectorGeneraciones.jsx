import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectorGeneraciones = (props) => {
    const [generacion, setGeneracion] = React.useState('');

    const handleChange = (event) => {
        const valor = event.target.value;
        setGeneracion(valor);
        props.manejarGeneracionSeleccionada(valor);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Generación</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={generacion}
                    label="Generación"
                    onChange={handleChange}
                >
                    <MenuItem value="todos">Todas las generaciones</MenuItem>
                    {props.generaciones.map((gen) => {
                        const id = gen.url.split('/').filter(Boolean).pop();
                        return (
                            <MenuItem key={id} value={id}>
                                {gen.name}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectorGeneraciones