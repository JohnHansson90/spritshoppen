import React from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'
import { useRecoilState } from 'recoil'
import allDrinksAtom from '../../atoms/DrinksAtom'


const Beer = () => {
  const [allDrinksList, ] = useRecoilState(allDrinksAtom)

  return (
    <div className="drycker-container">
        {
          allDrinksList.length > 0 ?
            allDrinksList.filter(item => item.type == "beer").map(dryck => <Card props={dryck} key={dryck._id} />)
          :
          <h3>Du måste fylla servern...</h3>
          }
    </div>
  )
}

export default Beer