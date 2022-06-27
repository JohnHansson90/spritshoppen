import React from 'react'
import hero from '../../API/hero.json'

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <img src={hero.img} alt="hero" className="hero-image" />
        </div>

    )
}

export default Hero
