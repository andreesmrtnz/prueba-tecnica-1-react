import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'
import './App.css'

function App() {
  
  
  const { fact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })




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
