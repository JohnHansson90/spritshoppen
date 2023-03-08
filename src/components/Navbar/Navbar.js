import React, { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let prevSrollPos = 0
    let currentScrollPos = 0

    window.addEventListener('scroll', (e) => {
      currentScrollPos = window.scrollY

      if (prevSrollPos - currentScrollPos < 0) {
        setScrolled("hide")
      } else if (prevSrollPos - currentScrollPos > 0) {
        setScrolled("show")
      }

      prevSrollPos = currentScrollPos
    })
  }, [])

  return (
    <nav className={`${scrolled}`}>
      <div className={styles.appBarWrapper}>
        <div>
          <Link to="/">
            <img src={navbarLogo} alt="logo" width={25} />
          </Link>
        </div>
        <div>
          <ul className={`${styles.menu}`}>
            {
              navbarLinks.map((nav) => (
                <li key={nav.id} className={`${active === nav.title ? "activeLink" : "link"}`} onClick={() => setActive(nav.title)}>
                  <Link to={`/${nav.link}`}>{nav.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;