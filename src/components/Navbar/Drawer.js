import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SwipeableDrawer } from '@mui/material'

const Drawer = ({showMenuBtn}) => {

    useEffect(() => {
      console.log();
    }, [])
  return (
    <SwipeableDrawer 
        className="navbar-menu" 
        open={showMenuBtn}
        onClose={showMenuBtn}
        anchor="right"
        >
          <ul 
        style={{marginTop: "60px", width: "100vw"}}
        >
            <Link to="/">
              <li onClick={showMenuBtn}>
                Hem
              </li>
            </Link>
            <Link to="/drycker">
              <li onClick={showMenuBtn}>
                Drycker    
              </li>  
            </Link>
            <Link to="/beer">
              <li onClick={showMenuBtn}>
                Öl
              </li>
            </Link>
            
            <Link to="/whiskey">
              <li onClick={showMenuBtn}>
                Whiskey
              </li>
            </Link>
          </ul>
        </SwipeableDrawer>
  )
}

export default Drawer