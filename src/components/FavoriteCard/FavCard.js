import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/global.css";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Card = ({ props }) => {
  const location = useLocation();
  const { state } = location;
  const [favoriteList, setFavoritesList] = useRecoilState(favoritesAtom);
  const [rating, setRating] = useState(0)

  const removeFromFavorites = (id) => {
    const newList = favoriteList.filter((item) => item._id !== id);
    setFavoritesList(newList);
  };

  const getRating = () => {
    if (props.reviews) {
      let reviews = props.reviews
      let rating = 0
  
      // Plocka ut alla ratings och lägg ihop
      for(let i = 0; i < reviews.length; i++) {
        rating += reviews[i].rating
      }
  
      // Dela summan i rating med antalet recensioner
      // Kollar om kvot är jämn (isåfall visa bara heltal) annars visa två decimaler

      return setRating((rating / reviews.length) % 1 !== 0 ? (rating / reviews.length).toFixed(2) : (rating / reviews.length))
    }

  }
  
  useEffect(() => {
    getRating()
  }, [])
  return (
    // Vad händer i NavLinken?
    <div className="fav-card-container">
      <NavLink
        to={{ pathname: `/${props.type}/${props.art}` }}
        state={{
          name: props.name,
          type: props.type,
          art: props.art,
          country: props.country,
          price: props.price,
          taste: props.taste,
          image: props.image,
          reviews: props.reviews,
          _id: props._id    
        }}
        className="fav-card-wrapper"
      >
        <div className="card-image-container">
          <div className="card-image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="card-product-details-type">
            <p className="card-product-type">{props.type}</p>
            <div className="card-product-details-price">
              <p className="no-margin card-product-details-name">{props.name}</p>
                  <p className="no-margin vertical-center">
                    <StarRateRoundedIcon sx={{color: "var(--rating)", fontSize: "28px"}} />
                    {
                    Number(rating) > 0 ?
                    Number(rating).toFixed(1)
                    : Number(rating)
                    } {props.reviews ? `(${props.reviews.length})` : ''}
                  </p>
            </div>
            <div className="card-product-country-price">
              <p className="card-product-price no-margin">
                {
                  props.price % 1 !== 0 ?
                  props.price.toFixed(2)
                  :
                  `${props.price}:-`
                }
              </p>
            </div>
          </div>
        </div>
      </NavLink>
      <button onClick={() => removeFromFavorites(props._id)}><DeleteOutlineIcon sx={{ color: 'var(--fav-red)'}}/></button>
    </div>
  );
};

export default Card;
