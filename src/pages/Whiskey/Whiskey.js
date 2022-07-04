import React from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'
import allDrinksAtom from '../../atoms/DrinksAtom'
import { useRecoilState } from 'recoil'

const Whiskey = () => {

  const [allDrinksList,] = useRecoilState(allDrinksAtom)

  return (
    <div className="drycker-container">
        {
          allDrinksList.length > 0 ?
            allDrinksList.filter(item => item.type == "whiskey").map(dryck => 
                <Card props={dryck} key={dryck.id}/> 
            )
            :
          <h3>Du måste fylla servern...</h3>
        }
    </div>
  )
}

export default Whiskey