import { useEffect, useState } from 'react'

const CAT_ENDPOINT_IMAGE_URL = (firstWord) => `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

/**
 * @param {*} param0 fact
 * @returns imagen del gato
 */
export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()
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
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
