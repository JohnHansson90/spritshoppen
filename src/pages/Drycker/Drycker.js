import React, { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card'
import countriesObj from '../../API/countries'

import { MenuItem, Select, InputLabel } from '@mui/material'

const Drycker = () => {
  const [fetchURL, setFetchURL] = useState('http://localhost:1337/all')
  const [filterValues, setFilterValues] = useState({
    country: "",
    drinkType: "",
  })
  const [newCountriesList, setNewCountriesList] = useState([])
  const [drinkTypeList, setDrinkTypeList] = useState([])
  const [allDrinksList, setAllDrinksList] = useState([])
  
  useEffect(() => {
    setFilterValues(prev => { return { ...prev, country: 'Alla länder' } } )
  }, [])

  useEffect(() => {
    let mounted = true
    const fetchAllProd = async () => {
      const response = await fetch(`${fetchURL}`)
      const data = await response.json()
      let countryList = []
      let drinkTypes = []
      if (mounted) {
        setAllDrinksList(data)
      }

      // Lägg till aktuella länder i lista
      await data.forEach(item => {
        if(countryList.includes(item.country)) {
          return
        }
        countryList.push(item.country)
        
        
      })
      await data.forEach(item => {
        // Lägg till de drinktyper som finns för valt land i lista
        if(drinkTypes.includes(item.prodType) || !countryList.includes(item.country)) {
          return
        } 
        drinkTypes.push(item.prodType)
          
      })
      countryList.sort().unshift('Alla länder')
      setNewCountriesList(countryList)
      setDrinkTypeList(drinkTypes)
      console.log(countryList);
      console.log(drinkTypes)
    }
    fetchAllProd()

    return () => {
      mounted = false
    }
  }, [fetchURL, filterValues])

  const setCountryFilter = (event) => {
    setFilterValues(prev => { return { ...prev, country: event.target.value } })
  }

  const setDrinkTypeFilter = (event) => {
    setFilterValues(prev => { return { ...prev, drinkType: event.target.value } })
  }


  return (
    <>
      <div className="drycker-filter">
        <div>
        <InputLabel id="landSelect-label">Land</InputLabel>
          <Select 
            onChange={setCountryFilter} 
            value={filterValues.country} 
            labelId='landSelect-label'>
            {
              newCountriesList.length > 0 && newCountriesList.map((item, index) => (
                <MenuItem key={`${item.value}${index}`} value={item}>{item}</MenuItem>
              ))
            }
          </Select>
          <InputLabel id="drinkType-label">Dryck</InputLabel>
          <Select
            onChange={setDrinkTypeFilter}
            value={'Alla typer'}
            labelId='drinkType-label'
          >
            {
              drinkTypeList.length > 0 && drinkTypeList.map((item, index) => (
                <MenuItem key={`${item.value}${index}`} value={item}>{item}</MenuItem>
              ))
            }
          </Select>
        </div>
      </div>
      <div className="drycker-container">
        {
          allDrinksList.length > 0 ?
          filterValues.country === 'Alla länder' ?
          allDrinksList.map(item =>
            <Card props={item} key={item._id} />
          )
          :
          allDrinksList.filter(item => 
            item.country === filterValues.country
            ).filter(item => item.prodType === filterValues.drinkType).map(item =>
            <Card props={item} key={item._id} />
          )
          :
          <h3>Du måste fylla servern...</h3>
        }
      </div>
    </>
  )
}

export default Drycker