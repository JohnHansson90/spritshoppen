import React, { useState } from "react";
import { useRecoilState } from "recoil";
import favoritesAtom from "../../atoms/NavbarAtoms";
import menuBtn from "../../assets/menubtn.png";
import { Link } from "react-router-dom";
import FavCard from "../FavoriteCard/FavCard";
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppBar } from "@mui/material";
import { logo, menu, close, navbarLogo } from "../../assets";
import { navbarLinks } from "../../constants";
import styles from './Navbar.module.css'

const Navbar = () => {
  const [active, setActive] = useState("")



  return (
    <AppBar sx={{ backgroundColor: "white", padding: ".3em 0 0 0" }}>
      <div className={styles.appBarWrapper}>
        <div>
          <Link to="/">
            <img src={navbarLogo} alt="logo" width={80} style={{margin: 0}}/>
          </Link>
        </div>
        <div>
          <ul className={`${styles.menu}`}>
            {
              navbarLinks.map((nav) => (
                <li key={nav.id} className={`${active === nav.title ? "activeLink" : "link"}`} onClick={() => setActive(nav.title)}>
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </AppBar>
  );
};

export default Navbar;