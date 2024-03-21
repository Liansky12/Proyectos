import './App.css'
/**
 * useRef hook que permite crear una referencia mutable
 * que persiste durante todo el ciclo de vida del componente
 * y no cambia el renderizado del componente
*/
import { useEffect, useState, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
    }

    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({search})

  const handleSubmit = (e) => {
    e.preventDefault()
    /* const { query } = Object.fromEntries(new window.FormData(e.target)) */
    /* const fields = new window.FormData(e.target)
    const query = fields.get('query') */
    getMovies()
  }

  const handleChange = (e) => {
    updateSearch(e.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type="text" placeholder='Avengers, Start Wars, The Matrix...' />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
