import React, { useState } from 'react'
import menuBtn from '../../assets/menubtn.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState("")
    const showMenuBtn = () => {
        showMenu ? setRotate("") : setRotate("rotate")
        setShowMenu(!showMenu)
    }


    return (
        <div className="navbar-wrapper" onMouseLeave={() => showMenu && showMenuBtn()}>

            <div className="navbar-container">
                <div className="navbar-logotype">
                    <h3>SpritShoppen</h3>
                </div>
                <div>
                    <button className={`navbar-menubutton ${rotate}`} onClick={showMenuBtn} >
                        <img src={menuBtn} alt="menubutton" className="navbar-menubutton__img" />
                    </button>
                </div>
            </div>
            {
                showMenu &&
                <div className="navbar-menu" >
                    <ul>
                        <li>
                            <a href="#">Hem</a>
                        </li>
                       <Link to="/drycker">
                        <li>
                            Drycker
                        </li></Link>
                        <li>
                            <Link to="/beer">Öl</Link>
                        </li>
                        <li>
                            <Link to="/whiskey">Whiskey</Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Navbar