import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  const API_URL_FACTS = 'https://catfact.ninja/fact'
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()



  useEffect(() => {
    fetch(API_URL_FACTS)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
      })
  }, [])


  useEffect(() => {
    if (!fact) {
      return
    }
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const url = response.url
        setImageUrl( url)
      })
  }, [fact])

  return (
    <>
      <div>
        <h1>Cat Facts</h1>
        <p>{fact}</p>
        <img src={imageUrl} alt={fact} />
        <p>La URL de la imagen es: {imageUrl}</p>
      </div>
    </>
  )
}

export default App
