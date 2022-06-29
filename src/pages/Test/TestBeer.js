import React from "react";
import { useLocation } from "react-router-dom";
// vad är useLocation?
const TestBeer = () => {
  const location = useLocation();
  const { state } = location;
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
              <button>Spara till lista 🤡</button>
            </div>
          </div>
        </div>
        <div className="product-type-wrapper">
          <div className="product-type-container">
            <div className="product-type-information-container">
              <div className="">{state.type}</div>
              <div className="">{state.name}</div>
              <div className="product-type-price">{state.price}</div>
              <div className="">{state.taste}</div>
              <div className="">alkoholhalt</div>
              <div className="">Tillverkad i {state.country}</div>
              <div className="">Brödtext om spriten</div>
              <div className="">Ikoner</div>
            </div>
            <div className="product-taste-container">
              <div>logo 1</div>
              <div>logo 2</div>
              <div>logo 3</div>
            </div>
            <div className="product-type-stores">Handla i butik</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestBeer;
