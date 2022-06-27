import React from 'react'
import hero from '../../API/hero.json'

const Hero = () => {
    return (
        <div>
            <img src={hero.img} alt="hero" />
        </div>

    )
}

export default Hero
