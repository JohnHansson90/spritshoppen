import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";
import Reviews from "../../Components/Reviews/Reviews";
// vad är useLocation?
const TestBeer = () => {
  const location = useLocation();
  const { state } = location;
  const [favoriteList, setFavoritesList] = useRecoilState(favoritesAtom);
  const [commentUser, setCommentUser] = useState('')
  const [newComment, setNewComment] = useState('')
  const [newRating, setNewRating] = useState(5)
  const [commentBody, setCommentBody] = useState({})

  const saveToFavorites = () => {
    const newFavoriteList = [...favoriteList];
    newFavoriteList.push(state);
    setFavoritesList(newFavoriteList);
  };

  const removeFromFavorites = () => {
    const newList = favoriteList.filter((item) => item.id !== state.id);
    setFavoritesList(newList);
  };

  const updateDrink = (newBody) => {
    fetch(`http://localhost:1337/updateReview/${state.id}`, {
      method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newBody)
    })
  }

  const validateAndSendComment = (e) => {
    e.preventDefault()
    if (!(commentUser.length > 3)) {
      console.log('Namn måste vara minst tre tecken');
    }

    const newBody = {
      user: commentUser,
      comment: newComment,
      rating: newRating
    }

    updateDrink(newBody)
    
  }

  // const setCommentName = (name) => {
  //   let user = name
  //   console.log(user);
  // }

  // const setComment = (comment) => {
  //   let newComment = comment
  //   console.log(newComment);
  // }

  const reviews = state.reviews

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
                <p>{
                  state.price % 1 !== 0 ?
                  state.price.toFixed(2)
                  :
                  `${state.price}:-`
                  }</p>
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
            {/* <div className="product-type-stores">Handla i butik</div> */}
            <div>
              Kommentera:
              <div>
                <form>
                  <label>Namn:</label>
                  <input type="text" required onChange={(e) => setCommentUser(e.target.value)}/>
                  <label>Betyg:</label>
                  <select onChange={(e) => setNewRating(e.target.value)}>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                  </select>
                  <label>Kommentar:</label>
                  <input type="textfield" required onChange={(e) => setNewComment(e.target.value)}/>
                  <button type="submit" onClick={(e) => validateAndSendComment(e)}>Skicka</button>
                </form>
              </div>
            </div>
            <div>
                {
                  reviews.map((review) => <Reviews key={review.user + Math.random() * reviews.length} props={review}/>)
                }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestBeer;
