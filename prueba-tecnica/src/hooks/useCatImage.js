

import { useEffect, useState } from "react"


export const useCatImage = ({ fact }) => {
    const [imageUrl, setImageUrl] = useState()

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

    return { imageUrl }
}