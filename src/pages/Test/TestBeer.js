import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";
import Reviews from "../../Components/Reviews/Reviews";
import { TextField, Button, Rating } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
// vad är useLocation?
const TestBeer = () => {

  const [favoriteList, setFavoritesList] = useRecoilState(favoritesAtom);
  const [commentUser, setCommentUser] = useState('')
  const [newComment, setNewComment] = useState('')
  const [newRating, setNewRating] = useState(5)
  const [currentDrink, setCurrentDrink] = useState([])
  const [isDrinkLoaded, setIsDrinkLoaded] = useState(false)
  const [currentReviews, setCurrentReviews] = useState([])
  const { id } = useParams()


  const FETCH_URL = 'http://localhost:1337'
  useEffect(() => {
    const fetchOneDrink = async () => {
      const response = await fetch(`${FETCH_URL}/get_one/${{ id }.id}`)
      const data = await response.json()
      setCurrentDrink(data[0])
      setCurrentReviews(data[0].reviews)
      setIsDrinkLoaded(true)
    }
    fetchOneDrink()
    
    }, [])

  const saveToFavorites = () => {
    const newFavoriteList = [...favoriteList];
    newFavoriteList.push(currentDrink);
    setFavoritesList(newFavoriteList);
  };

  const removeFromFavorites = () => {
    const newList = favoriteList.filter((item) => item.art !== currentDrink.art);
    setFavoritesList(newList);
  };

  const updateDrink = async (newBody) => {
    await fetch(`${FETCH_URL}/updateReview/${currentDrink.art}`, {
      method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newBody),
    })

  }

  const validateAndSendComment = (e) => {
    if (commentUser.length < 2) {
      e.preventDefault()
      return console.log('Namn måste vara minst tre tecken');
    }

    const newBody = {
      "user": commentUser,
      "comment": newComment,
      "rating": newRating
    }

    updateDrink(newBody)
 

    
  }



  return (
    <main className="product-wrapper">
      <div className="product-container">
        <div className="product-image-wrapper">
          <div className="product-image-container">
            <div className="product-image-container-inner">
              <img
                src={currentDrink.image}
                alt={currentDrink.name}
                className="product-image"
              />
            </div>
            <div className="product-button-container">
              {favoriteList.find((item) => item._id === currentDrink._id) ? (
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
                <h4>{currentDrink.type}</h4>
              </div>
              <div className="product-type-name">
                <h1>{currentDrink.name}</h1>
              </div>
              <div className="product-type-made-in">
                Tillverkad i <strong>{currentDrink.country}</strong>
              </div>
              <div className="product-type-alcohol">alkoholhalt</div>
              <div className="product-type-price">
                <p>{
                  currentDrink.price % 1 !== 0 ?
                  currentDrink.price
                  :
                  `${currentDrink.price}:-`
                  }</p>
              </div>
              <div className="product-type-taste">
                {currentDrink.taste}
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
              <h4 className="reviews-header">Recensioner</h4>
              <div>
                <form>
                  <div className="review-rating">
                      <p>Betygsätt drycken:</p>
                      <Rating name="betyg" value={newRating} onChange={(event, newValue) => {setNewRating(newValue)}}/>
                  </div>
                  <div className="review-form">
                    <TextField id="name" label="Namn" variant="standard" autoComplete="off" onChange={(e) => setCommentUser(e.target.value)} required minLength="2" />
                    <TextField id="comment" label="Kommentar" variant="standard" multiline onChange={(e) => setNewComment(e.target.value)}/>
                  </div>
                  <div className="review-send-button">
                    <Button type="submit" variant="contained" sx={{ fontSize: 12}} endIcon={<SendIcon />} onClick={(e) => validateAndSendComment(e)}>Skicka</Button>
                  </div>
                </form>
              </div>
            </div>
            <div>
                {
                  isDrinkLoaded && currentReviews?.length > 0 ?
                  currentReviews.map((review) => <Reviews key={review.user + Math.random() * currentDrink.reviews.length} props={review}/>)
                  :
                  <div className="revies-empty-list-header">
                    <h4>Ingen har ännu recenserat drycken. <br />Bli den första att skriva vad du tycker!</h4>
                  </div>
                }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestBeer;
