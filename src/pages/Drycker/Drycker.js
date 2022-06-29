import React from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'

const Drycker = () => {


  return (
    <div className="drycker-container">
      {
        drycker.map(item =>
          <Card props={item} key={item.id} />
        )
      }
    </div>
  )
}

export default Drycker