import React, { useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import allDrinksAtom from './atoms/DrinksAtom'
import {Navbar, Footer } from './components'
import { List, Drycker, Hem, Spirits, TestBeer } from './pages'
import './Styles/global.css'

const App = () => {

  // const [, setAllDrinksList] = useRecoilState(allDrinksAtom)
  // const ALL_DRINKS_URL = 'http://localhost:1337/all'


  // useEffect(() => {
  //   const fetchAllDrinks = async () => {
  //     const response = await fetch(ALL_DRINKS_URL)
  //     const data = await response.json()

  //     setAllDrinksList(data)
  //   }

  //   fetchAllDrinks()
  // }, [])

  return (
      <BrowserRouter>
        <div style={{display: "flex", flexDirection: "column", paddingTop: "5em"}}>
          <div>
            <Navbar />
          </div>
          <div>
            <Routes>
              {/* <Route path="/drycker" element={<Drycker props={ALL_DRINKS_URL}/>} /> */}
              <Route exact path="/beer" element={<List prodType={'beer'}/>} />
              <Route exact path="/spirits" element={<List prodType={'spirits'} />} />
              <Route exact path="/wine" element={<List prodType={'wine'} />} />
              {/* <Route path="/whiskey" element={<List prodType={'whiskey'} />} /> */}
              {/* <Route path="/beer" element={<Beer />} />
              <Route path="/whiskey" element={<Whiskey />} /> */}
              <Route exact path="/" element={<Hem />} />
              <Route path="/:type/:id/" element={<TestBeer />} />
            </Routes>
          </div>
          <Footer />
        </div>
        </BrowserRouter>

  )
}

export default App