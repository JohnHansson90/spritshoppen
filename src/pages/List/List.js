import React, { useEffect, useState } from 'react'
import { Card } from '../../components'
import { useRecoilState } from 'recoil'
import allDrinksAtom from '../../atoms/DrinksAtom'
import axios from 'axios'

const List = ({prodType}) => {
  const [allDrinksList, ] = useRecoilState(allDrinksAtom)
  const [list, setList] = useState([])

  const fetchProdType = async () => {
    let array = []
    const response = await axios.get(`http://localhost:1337/${prodType}`)
    await response.data.forEach((data) => {array.push(data)})
    setList(array)
  }

  useEffect(() => {
    fetchProdType()
  }, [prodType])

  return (
    <div className="drycker-container">
        {
          list.length > 0 ?
          list
          // .filter(item => item.prodType == "beer")
          .map(dryck => <Card props={dryck} key={dryck._id} />)
          :
          <h3>Du måste fylla servern...</h3>
          }
    </div>
  )
}

export default List