import './App.css'
import TodosLosPokemons from './pages/Pokemons/TodosLosPokemons'
import BuscadorPokemon from './pages/Pokemons/BuscadorPokemon'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import ListaPokemon from './pages/Pokemons/ListaPokemon'

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/lista' element={<ListaPokemon />} />
        <Route path="/" element={<TodosLosPokemons />} />
        <Route path="/buscador" element={<BuscadorPokemon />} />
      </Routes>
    </>
  )
}

export default App
