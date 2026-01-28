# WebPokedex <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" width="40" height="40" />

Proyecto de Pokedex desarrollado con **React**, utilizando la API pública de [PokeAPI](https://pokeapi.co/).

## Tecnologías y Librerías Utilizadas

Este proyecto ha sido construido utilizando las siguientes tecnologías y librerías clave:

*   **React**: Librería principal para la construcción de la interfaz de usuario.
*   **Vite**: Entorno de desarrollo rápido y herramienta de construcción.
*   **React Router DOM**: Para el manejo de rutas y navegación entre páginas (`/`, `/lista`, `/buscador`, `/pokemon/:id`).
*   **Material UI (MUI)**: Componentes de interfaz de usuario pre-diseñados (Selects, Inputs, etc.).
*   **Fetch API**: Para realizar peticiones HTTP a PokeAPI.

## 📁 Estructura del Proyecto

```text
src
│   App.css
│   App.jsx
│   index.css
│   main.jsx
│   
├───assets
│       react.svg
│       
├───components
│   ├───BuscarPokemon
│   │       BuscarPokemon.jsx
│   │       
│   ├───ListadoPokemon
│   │       ListadoPokemon.css
│   │       ListadoPokemon.jsx
│   │       
│   ├───Menu
│   │       menu.css
│   │       Menu.jsx
│   │       
│   ├───PokemonSeleccionado
│   │       PokemonSeleccionado.css
│   │       PokemonSeleccionado.jsx
│   │
│   ├───PokemonUnico
│   │       PokemonUnico.jsx
│   │
│   ├───SelectorPokemon
│   │       SelectorPokemon.jsx
│   │
│   └───TextFieldPokemon
│           TextFieldPokemon.jsx
│
├───hooks
│   └───Pokemons
│           usePokemons.jsx
│
├───pages
│   └───Pokemons
│           BuscadorPokemon.jsx
│           ListaPokemon.jsx
│           Pokemon.jsx
│           TodosLosPokemons.jsx
│
└───services
    └───Pokemons
            getPokemons.js
```

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

Abre tu terminal y ejecuta el siguiente comando para descargar el código:

```bash
git clone https://github.com/DiegoMartinez-Git/PokedexReact.git
```

### 2. Entrar en la carpeta del proyecto

```bash
cd PokedexReact
```

*(Nota: Asegúrate de que el nombre de la carpeta coincida con el que se creó al clonar)*

### 3. Instalar las dependencias

Descarga e instala todas las librerías necesarias ejecutando:

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo

Para iniciar la aplicación localmente:

```bash
npm run dev
```

La terminal te mostrará una URL local (generalmente `http://localhost:5173/`) donde podrás ver la aplicación funcionando.

## Descripción de Funcionalidades

*   **Selector de Pokémon**: Un desplegable para elegir un Pokémon y ver su imagen directamente.
*   **Listado Completo**: Visualización de los primeros 151 Pokémon con enlaces a sus fichas individuales.
*   **Buscador**: Utilidad para filtrar Pokémon por nombre en tiempo real.
*   **Ficha de Pokémon**: Página de detalle (Ruta dinámica) que muestra información específica de un Pokémon seleccionado.
