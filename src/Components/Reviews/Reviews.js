import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Reviews = ({props}) => {
  return (
    <div className="reviews-card-wrapper">
        <div className="reviews-card-container">
          <div className="reviews-card-user">
            <p className="no-top-margin">{props.user}</p>
            <div className="reviews-card-rating">
                <StarRateRoundedIcon sx={{ color: "var(--rating)"}}/>
                <p>{props.rating}</p>
            </div>
          </div>
        </div>
        <div className="reviews-card-comment">
            <p className="no-top-margin">{props.comment}</p>
        </div>
          <div>
            <p className="no-btm-margin reviews-card-timestamp">{props.created}</p>
          </div>
    </div>
  )
}

export default Reviews