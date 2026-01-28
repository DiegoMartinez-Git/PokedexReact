import './App.css'
import TodosLosPokemons from './pages/Pokemons/TodosLosPokemons'
import BuscadorPokemon from './pages/Pokemons/BuscadorPokemon'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import ListaPokemon from './pages/Pokemons/ListaPokemon'
import Pokemon from './pages/Pokemons/Pokemon'

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/lista' element={<ListaPokemon />} />
        <Route path="/" element={<TodosLosPokemons />} />
        <Route path="/buscador" element={<BuscadorPokemon />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </>
  )
}

export default App
