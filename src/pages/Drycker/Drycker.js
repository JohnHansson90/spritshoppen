import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'

const Drycker = () => {

  const [dryckesLista, setDryckesLista] = useState([])
  const URL = 'http://localhost:3000/drycker'



  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setDryckesLista(data)
    }
    getData()
  }, [])

  return (
    <div className="drycker-container">
      {
        dryckesLista.length > 0 ? dryckesLista.map(item =>
          <Card props={item} key={item.agentId} />
        ) : "Loading"
      }
    </div>
  )
}

export default Drycker