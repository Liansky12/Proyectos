import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_CAT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = (firstWord) => `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export const App = () => {
  /**
   * fact - cambiar regularmente
   * setFact - no (debería) cambia
   */
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  /**
   * Recomendación al crear el efecto: siempre poner primero las dependencias necesarias '[]' y luego
   * la función. Evita posibles problemas de 'Loops Infinitos' y colapso de memoria.
   * Dejar un Array vacío como dependencia signifca que sólo se ejecutará la primera vez. Dentro del
   * Array se pueden incluir las dependencias que pueden cambiar.
   * *
   * undefined - cada vez que se renderiza el componente(tracking,
   * cambios en UI utilizando DOM, recuperar elementos...)
   * [] - sólo la primera vez
   * [setFact] - la primera vez que se renderiza el componente y cada vez que el valor de
   * setFact cambia
   * *
   * useEffect siempre tiene que ser una función síncrona (no es posible utilizar async/await) pero
   * es posible envolver el contenido de useEffect con una función asíncrona
   */
  useEffect(() => {
    /*
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_CAT)
      const json = await res.json()
      setFact(json.fact)
    }
    getRandomFact()
    */
    fetch(CAT_ENDPOINT_RANDOM_CAT)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => setFact(data.fact))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(CAT_ENDPOINT_IMAGE_URL(threeFirstWords))
      .then(res => {
        if (!res.ok) throw new Error('Error fetching image')
        return res.json()
      })
      .then(data => {
        setImageUrl(`${data._id}/says/${threeFirstWords}?size=50&color=white`)
      })
      .catch((err) => console.log(err))
  }, [fact])
  return (
    <main>
      <h1>App de gatitos</h1>
      {/* Renderizado condicional */}
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen extraida usando las primeras tres palabras ${fact}`} />}
    </main>
  )
}
