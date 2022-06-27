import React from 'react'
import Card from '../../Components/Card/Card'
import drycker from '../../API/drycker.json'

const Whiskey = () => {
  return (
    <div className="drycker-container">
        {
            drycker.filter(item => item.type == "whiskey").map(dryck => 
                <Card props={dryck} key={dryck.id}/> 
            )
        }
    </div>
  )
}

export default Whiskey