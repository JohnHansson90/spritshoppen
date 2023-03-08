import React from 'react'
import {logo} from '../../assets'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <img src={logo} alt="hero" />
        </div>

    )
}

export default Hero
