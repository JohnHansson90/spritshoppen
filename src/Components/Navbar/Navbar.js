import React, { useState } from "react";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";
import menuBtn from "../../assets/menubtn.png";
import favBtn from "../../assets/likeBtn.png";
import { Link } from "react-router-dom";
import FavCard from "../FavoriteCard/FavCard";
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFavoritesMenu, setShowFavoritesMenu] = useState(false);
  const [favoriteList] = useRecoilState(favoritesAtom);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const closeBackdrop = () => {
      setShowBackdrop(false)
  }

  const openBackdrop = () => {
      setShowBackdrop(true)
  }

  const showMenuBtn = () => {
    setShowMenu(!showMenu);
    showFavoritesMenu && setShowFavoritesMenu(!showFavoritesMenu);
  };

  const showFavorites = () => {
    setShowFavoritesMenu(!showFavoritesMenu);
    showMenu && setShowMenu(!showMenu);
    openBackdrop()
  };

  return (
    <div
      className="navbar-wrapper"
      onMouseLeave={() => showMenu && showMenuBtn()}
    >
      <div className="navbar-container">
        <div className="navbar-logotype">
          <Link to="/">
            <h3>SpritShoppen</h3>
          </Link>
        </div>
        <div className="center">
          <button className="navbar-favorites-btn" onClick={showFavorites}>
            {
              favoriteList.length > 0 ? 
            <FavoriteIcon sx={{ fontSize: "34px", color: "var(--fav-red)"}}/>
            :
            <FavoriteBorderIcon sx={{ fontSize: "34px"}}/>
            }
            <div className="fav-counter">{favoriteList.length}</div>
          </button>
        <div>
          <button
            className={`navbar-menubutton ${showMenu ? "rotate" : ""}`}
            onClick={showMenuBtn}
          >
            <img
              src={menuBtn}
              alt="menubutton"
              className="navbar-menubutton__img"
            />
          </button>
        </div>
        </div>
      </div>
      {showBackdrop && (
          <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showBackdrop}
          
        >
            <div className="navbar-menu">
              <p>Mina favoriter</p>
                {
                    favoriteList.length > 0 ?
                        
                        favoriteList.map((favorite) => (
                            <FavCard props={favorite} key={favorite._id}/>
                        ))
                        
                    :
                    <div className="navbar-menu-empty-fav">
                        <h3>Listan är tom.</h3>
                        <p>Prova lägg till några favoriter</p>
                    </div>
                }
            </div>
            <button onClick={closeBackdrop} className="navbar-favorites-btn-close"><CloseIcon /></button>
        </Backdrop>
      )}
      {showMenu && (
        <div className="navbar-menu" onClick={showMenuBtn}>
          <ul>
            <li>
                <Link to="/">
                    Hem
                </Link>
            </li>
            <li>
                <Link to="/drycker">
                    Drycker      
                </Link>
            </li>
            <li>
              <Link to="/beer">Öl</Link>
            </li>
            <li>
              <Link to="/whiskey">Whiskey</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
