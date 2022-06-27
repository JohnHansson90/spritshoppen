import React from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'

const Beer = () => {
  return (
    <div className="drycker-container">
        {
            drycker.filter(item => item.type == "beer").map(dryck => <Card props={dryck} key={dryck.id} />)
        }
    </div>
  )
}

export default Beer