import React from 'react'
import '../../Styles/global.css'

const Card = ({props}) => {

  return (
    <div className="card-wrapper">
        <div className="card-image"><img src={props.image} alt={props.name} /></div>
        <div className="card-product-details">
          <h3 className="card-product-name">{props.name}</h3>
          <h4 className="card-product-price">{props.price.toFixed(2)}</h4>
          <p className="card-product-taste">{props.taste}</p>
        </div>
    </div>
  )
}

export default Card