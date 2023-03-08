import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const TopPicksCard = ({props}) => {
  const [rating, setRating] = useState(0)
  const getRating = () => {
    if (props.reviews.length > 0) {
      let reviews = props.reviews
      let rating = 0

      for(let i = 0; i < reviews.length; i++) {
        rating += reviews[i].rating
      }

      return setRating((rating / reviews.length) % 1 !== 0 ? (rating / reviews.length).toFixed(2) : (rating / reviews.length))
    }
  }

  useEffect(() => {
    getRating()
  }, [])

  return (
    
    <div className="topPicks-card-wrapper">
        <Link to={{ pathname: `/${props.type}/${props.art}` }}>
          <div className="topPicks-image-container">
            <img src={props.image} alt={props.name} className="topPicks-card-image" />
            <p className="topPicks-image-flag">{props.countryFlag}</p>
          </div>
          <p className="topPicks-card-name">{props.name}</p>
        </Link>
        <Link to={{ pathname: `/${props.type}/${props.art}`}}>
          <div className="topPicks-card-rating">
            <StarRateRoundedIcon sx={{color: "var(--rating)", fontSize: "16px"}}/>
            <p className="no-margin">{
            Number(rating) > 0 ?
            Number(rating).toFixed(1)
            : Number(rating)
            }</p>
          </div>
        </Link>
      </div>
  )
}

export default TopPicksCard