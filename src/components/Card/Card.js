import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/global.css";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { Tooltip } from "@mui/material";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Card = ({ props }) => {
  const [favoriteList, setFavoritesList] = useRecoilState(favoritesAtom);
  const [rating, setRating] = useState(0)

  const removeFromFavorites = () => {
    const newList = favoriteList.filter((item) => item.art !== props.art);
    setFavoritesList(newList);
  }

  const saveToFavorites = () => {
    const newFavoriteList = [...favoriteList];
    newFavoriteList.push(props);
    setFavoritesList(newFavoriteList);
  };

  const getRating = () => {
    if (props.reviews.length > 0) {
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
    <div className="card-wrapper">
      
        <div className="card-container">
          <div className="card-image-container">
            <div className="card-image">
              <img src={props.image} alt={props.name} />
            </div>
            <div className="card-product-details-type">
              <p className="card-product-type">{props.type}</p>
              <div className="card-product-details-price">
                <p className="no-margin card-product-details-name">
                  {" "}
                  {props.name}
                </p>
                <p className="card-product-details-id">Nr: {props.art}</p>
              </div>
              <div className="card-product-country-price">
                <p className="card-product-country">{props.countryFlag} {props.country}</p>
                <p className="card-product-price no-margin">
                  {props.price % 1 != 0
                    ? props.price.toFixed(2)
                    : `${props.price}:-`}
                </p>
              </div>
              <p className="card-product-taste">{props.taste}</p>
            </div>
          </div>
        </div>
      
        
      <div className="card-additional-buttons">
        <div className="inline-flex ">
          {
            favoriteList.find((item) => item.art === props.art) ? 
            <Tooltip title="Ta bort favorit" placement="top">
              <button
              className="card-wrapper-button"
              onClick={() => removeFromFavorites()}
              >
                <FavoriteIcon sx={{ color: "var(--fav-red)" }} />
              </button>
            </Tooltip>
            : 
            <Tooltip title="Spara som favorit" placement="top">
              <button
                className="card-wrapper-button"
                onClick={() => saveToFavorites()}
              >
                <FavoriteBorderIcon className="card-additional-buttons-favIcon"/>
              </button>
            </Tooltip>
          }
          
          <div className="card-wrapper-rating">
            <Tooltip title="Recensioner och betyg">
                <StarRateRoundedIcon sx={{color: "var(--rating)", fontSize: "28px"}} />
            </Tooltip>
            <p className="no-margin">
              {
              Number(rating) > 0 ?
              Number(rating).toFixed(1)
              : Number(rating)
              } {props.reviews ? `(${props.reviews.length})` : ''}
            </p>
          </div>


        </div>
        <Tooltip title="Till drycken" placement="top">
          <NavLink to={{ pathname: `/${props.type}/${props.art}` }}>
              <ArrowRightAltRoundedIcon sx={{ fontSize: "32px" }}/>
          </NavLink>
        </Tooltip>
      </div>
    </div>
  );
};

export default Card;
