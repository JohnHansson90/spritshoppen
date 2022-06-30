import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Reviews = ({props}) => {
  return (
    <div className="reviews-card-wrapper">
        <div className="reviews-card-user">
            <p>{props.user}</p>
            <div className="reviews-card-rating">
                <StarRateRoundedIcon sx={{ color: "var(--rating)"}}/>
                <p>{props.rating}</p>
            </div>
        </div>
        <div className="reviews-card-comment">
            <p>{props.comment}</p>
        </div>
    </div>
  )
}

export default Reviews