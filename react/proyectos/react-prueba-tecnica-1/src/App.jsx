import './App.css'
import { useCatFact } from './services/hooks/useCatFact'
import { useCatImage } from './services/hooks/useCatImage'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen extraida usando las primeras tres palabras ${fact}`} />}
    </main>
  )
}
