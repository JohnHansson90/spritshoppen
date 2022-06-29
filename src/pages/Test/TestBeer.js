import React from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";
// vad är useLocation?
const TestBeer = () => {
  const location = useLocation();
  const { state } = location;
  const [favoriteList, setFavoritesList] = useRecoilState(favoritesAtom);

  const saveToFavorites = () => {
    const newFavoriteList = [...favoriteList];
    newFavoriteList.push(state);
    setFavoritesList(newFavoriteList);
  };

  const removeFromFavorites = () => {
    const newList = favoriteList.filter((item) => item.id !== state.id);
    setFavoritesList(newList);
  };

  return (
    <main className="product-wrapper">
      <div className="product-container">
        <div className="product-image-wrapper">
          <div className="product-image-container">
            <div className="product-image-container-inner">
              <img
                src={state.image}
                alt={state.name}
                className="product-image"
              />
            </div>
            <div className="product-button-container">
              {favoriteList.find((item) => item.id === state.id) ? (
                <button onClick={() => removeFromFavorites()}>
                  Ta bort från lista 🤡
                </button>
              ) : (
                <button onClick={() => saveToFavorites()}>
                  Spara till lista 🤡
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="product-type-wrapper">
          <div className="product-type-container">
            <div className="product-type-information-container">
              <div className="product-type-type">
                <h4>{state.type}</h4>
              </div>
              <div className="product-type-name">
                <h1>{state.name}</h1>
              </div>
              <div className="product-type-made-in">
                Tillverkad i <strong>{state.country}</strong>
              </div>
              <div className="product-type-alcohol">alkoholhalt</div>
              <div className="product-type-price">
                <p>{state.price}:-</p>
              </div>
              <div className="product-type-taste">
                {state.taste}
                <p>
                  Nyanserad, karaktärsfull, mycket syrlig smak med inslag av
                  fat, torkad frukt, apelsinskal, nötter, rostat bröd, örter och
                  stall. Serveras vid 8-10°C som sällskapsdryck eller till
                  rätter av fisk eller ljust kött.
                </p>
              </div>

              <div className="product-type-by-food">
                <div>🐟</div>
                <div>🦆</div>
                <div>🐖</div>
                <div>🥂</div>
              </div>
            </div>
            <div className="product-type-taste-container">
              <p>BESKA</p>
              <p>FYLLIGHET</p>
              <p>SÖTMA</p>
            </div>
            <div className="product-type-stores">Handla i butik</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestBeer;
