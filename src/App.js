import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import allDrinksAtom from './atoms/DrinksAtom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Beer from './pages/Beer/Beer'
import Drycker from './pages/Drycker/Drycker'
import Hem from './pages/Hem/Hem'
import TestBeer from './pages/Test/TestBeer'
import Whiskey from './pages/Whiskey/Whiskey'
import './Styles/global.css'

const App = () => {

  const [, setAllDrinksList] = useRecoilState(allDrinksAtom)
  const ALL_DRINKS_URL = 'http://localhost:1337/all'


  useEffect(() => {
    const fetchAllDrinks = async () => {
      const response = await fetch(ALL_DRINKS_URL)
      const data = await response.json()

      setAllDrinksList(data)
    }

    fetchAllDrinks()
  }, [])

  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/drycker" element={<Drycker props={ALL_DRINKS_URL}/>} />
        <Route path="/beer" element={<Drycker props={'http://localhost:1337/all/beer'}/>} />
        <Route path="/whiskey" element={<Drycker props={'http://localhost:1337/all/whiskey'}/>} />
        {/* <Route path="/beer" element={<Beer />} />
        <Route path="/whiskey" element={<Whiskey />} /> */}
        <Route exact path="/" element={<Hem />} />
        <Route path="/:type/:id/" element={<TestBeer />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App