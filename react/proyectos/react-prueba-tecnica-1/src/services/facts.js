const CAT_ENDPOINT_RANDOM_CAT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  // useState no está permitido aquí
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_CAT)
    if (!res.ok) throw new Error('Error fetching fact')
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    return console.log(err)
  }
}
