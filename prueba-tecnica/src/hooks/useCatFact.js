import { useEffect, useState } from "react"


export const useCatFact = () => {
    const API_URL_FACTS = 'https://catfact.ninja/fact'
    const [fact, setFact] = useState()


    useEffect(() => {
        fetch(API_URL_FACTS)
          .then(res => res.json())
          .then(data => {
            setFact(data.fact)
          })
      }, [])

    return { fact }
}