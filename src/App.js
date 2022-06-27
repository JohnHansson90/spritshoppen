import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Beer from './pages/Beer/Beer'
import Drycker from './pages/Drycker/Drycker'
import Hem from './pages/Hem/Hem'
import Whiskey from './pages/Whiskey/Whiskey'
import './Styles/global.css'

const App = () => {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/drycker" element={<Drycker />} />
        <Route path="/beer" element={<Beer />} />
        <Route path="/whiskey" element={<Whiskey />} />
        <Route path="/" element={<Hem />} />
      </Routes>
    </>

  )
}

export default App