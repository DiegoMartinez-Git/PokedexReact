import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodosLosPokemons from './pages/Pokemons/TodosLosPokemons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodosLosPokemons></TodosLosPokemons>
    </>
  )
}

export default App
