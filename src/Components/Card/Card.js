import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/global.css";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";

const Card = ({ props }) => {
  const location = useLocation();
  const { state } = location;
  const [favoriteList, setFavoritesList] = useRecoilState(favoritesAtom);

  const saveToFavorites = () => {
    const newFavoriteList = [...favoriteList];
    newFavoriteList.push(state);
    setFavoritesList(newFavoriteList);
  };

  return (
    // Vad händer i NavLinken?
    <NavLink
      to={{ pathname: `/${props.type}-${props.id}` }}
      state={{
        name: props.name,
        type: props.type,
        id: props.id,
        country: props.country,
        price: props.price,
        taste: props.taste,
        image: props.image,
      }}
      className="card-wrapper"
    >
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
              <p className="card-product-details-id">Nr: {props.id}</p>
            </div>
            <div className="card-product-country-price">
              <p className="card-product-country">{props.country}</p>
              <p className="card-product-price no-margin">
                {props.price.toFixed(2)}
              </p>
            </div>
            <p className="card-product-taste">{props.taste}</p>
          </div>
        </div>
      </div>
      <button onClick={() => saveToFavorites()}>☞</button>
    </NavLink>
  );
};

export default Card;
