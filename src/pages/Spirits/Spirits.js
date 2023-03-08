import React, { useEffect, useState } from 'react'
import { Card } from '../../components'
import { useRecoilState } from 'recoil'
import allDrinksAtom from '../../atoms/DrinksAtom'
import axios from 'axios'

const Spirits = () => {
  const [allDrinksList, ] = useRecoilState(allDrinksAtom)
  const [spiritsList, setSpiritsList] = useState([])

  const fetchSpirits = async () => {
    let array = []
    const response = await axios.get('http://localhost:1337/spirits')
    await response.data.forEach((data) => {array.push(data)})
    setSpiritsList(array)
  }

  useEffect(() => {
    fetchSpirits()
  }, [])

  return (
    <div className="drycker-container">
        {
          spiritsList.length > 0 ?
          spiritsList
          // .filter(item => item.prodType == "beer")
          .map(dryck => <Card props={dryck} key={dryck._id} />)
          :
          <h3>Du måste fylla servern...</h3>
          }
    </div>
  )
}

export default Spirits