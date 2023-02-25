import React from 'react'
import Hero from '../../Components/Hero/Hero'
import TopPicks from '../../Components/TopPicks/TopPicks'

const Hem = () => {
    return (
        <div>
            <Hero />
            <div className="hem-header">
                <h3>Välkommen till SpritGuiden</h3>
                <p> - Din undanflykt på nätet</p>
            </div>
            <TopPicks />
        </div>
    )
}

export default Hem