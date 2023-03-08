import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import styles from './Card.module.css'

const TopPicksCard = ({props}) => {
  const [rating, setRating] = useState(0)
  
  // Byter ut mellanslag mot -
  const linkToDrink = `${props.type.replace(/ /g,"-")}/${props.art}`

  useEffect(() => {
    if (props.reviews.length > 0) {
      let reviews = props.reviews
      let rating = 0

      for(let i = 0; i < reviews.length; i++) {
        rating += reviews[i].rating
      }

      return setRating((rating / reviews.length) % 1 !== 0 ? (rating / reviews.length).toFixed(1) : (rating / reviews.length).toFixed(0))
    }
  }, [])

  return (
    
    <div className={styles.wrapper}>
        <Link to={linkToDrink}>
          <div className={styles.imageContainer}>
            <img src={props.image} alt={props.name} width="100px" height="100px" className={styles.image} />
            {/* <p className="topPicks-image-flag">{props.countryFlag}</p> */}
          </div>
            <div className={styles.cardInfo}>
            <p className={styles.cardTitle}>{props.name}</p>
            <div className="topPicks-card-rating">
              <StarRateRoundedIcon sx={{color: "var(--rating)", fontSize: "16px"}}/>
              <p className="no-margin">{
                Number(rating)
              }</p>
            </div>
          </div>
        </Link>
        <Link to={{ pathname: `/${props.type.replace(/ /g, "-")}/${props.art}`}}>
        </Link>
      </div>
  )
}

export default TopPicksCard