import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-container">
            <ul>
                <Link to="#">
                    Kontakta oss
                </Link>
                <Link to="#">
                    Om SpritGuiden
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer