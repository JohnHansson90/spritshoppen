import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Drycker from './pages/Drycker/Drycker'
import './Styles/global.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/drycker" element={<Drycker />}/>
      </Routes>
    </>
    
  )
}

export default App