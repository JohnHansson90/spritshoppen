import React from 'react'
import { useLocation } from 'react-router-dom'

const TestBeer = () => {
const location = useLocation()
const { state } = location
  return (
    <div>
        Testölen! Ska stylas
        {/* <h3>{id}{props.name}</h3> */}
        <h3>{state.name}</h3>
        <p>{state.id}</p>
        <img src={state.image} alt={state.name} />
        </div>
  )
}

export default TestBeer