import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'
import { useRecoilState } from 'recoil'
import allDrinksAtom from '../../atoms/DrinksAtom'


const Beer = () => {
  const [allDrinksList, ] = useRecoilState(allDrinksAtom)
  const [allBeerList, setAllBeerList] = useState([])

  const fetchAllProdType = async () => {
    const response = await fetch(`http://localhost:1337/all/beer`)
    const data = await response.json()
    setAllBeerList(data)
  }

  useEffect(() => {
    fetchAllProdType()
  }, [])

  return (
    <div className="drycker-container">
        {
          allBeerList.length > 0 ?
          allBeerList.filter(item => item.prodType == "beer").map(dryck => <Card props={dryck} key={dryck._id} />)
          :
          <h3>Du måste fylla servern...</h3>
          }
    </div>
  )
}

export default Beer