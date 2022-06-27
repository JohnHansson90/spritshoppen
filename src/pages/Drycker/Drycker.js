import React from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'

const Drycker = () => {


  return (
    <div>
      {
        drycker.map(item => 
          <Card props={item} key={item.name} />
        )
      }
    </div>
  )
}

export default Drycker