import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import favoritesAtom from '../../atoms/NavbarAtoms'
import Card from '../Card/Card'
import TopPicksCard from '../TopPicksCard/TopPicksCard'


const TopPicks = () => {
  const [topRated, setTopRated] = useState([])
  const [favoriteList] = useRecoilState(favoritesAtom)
  const FETCH_URL = 'http://localhost:1337/'

  
  useEffect(() => {
    const getTopRated = async () => {
      const response = await fetch(`${FETCH_URL}top_picks`)
      const data = await response.json()
    
      setTopRated(data)
    }
    getTopRated()
    console.log(topRated);
  }, [])


  return (
    <div className="topPicks-wrapper">
      <h4>Högst betygsatta dryckerna:</h4>
      <div className="topPicks-grid">
        {
          topRated.length > 0 ? topRated.map(item => <TopPicksCard key={item.art} props={item} />) : 'Loading'
        }
      </div>

      <h4>Dina favoriter:</h4>
      {
        favoriteList.length > 0 ?
      
      <div className="topPicks-grid">
        {
           favoriteList.map(item => <TopPicksCard key={item.art} props={item} />) 
        }
      </div>
      : 'Du har inga favoriter än. Testa lägg till några!'
      }
      
    </div>
  )
}

export default TopPicks