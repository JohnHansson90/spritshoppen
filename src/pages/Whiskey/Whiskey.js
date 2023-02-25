import React, { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card'
import countriesObj from '../../API/countries'
import { MenuItem, Select, FormControl } from '@mui/material'

const Whiskey = () => {

  const [allWhiskey, setAllWhiskey] = useState([])
  const [countryValue, setCountryValue] = useState(countriesObj[0].value)
  const fetchAllProdType = async () => {
    const response = await fetch(`http://localhost:1337/all/whiskey`)
    const data = await response.json()

    setAllWhiskey(data)
  }

  useEffect(() => {
    fetchAllProdType()
  }, [])

  const handleCountryChange = event => {
    console.log(event.target.value);
    setCountryValue(event.target.value)
  }

  return (
    <>
      <div className="drycker-filter">
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select onChange={handleCountryChange} value={countryValue}>
              {
                allWhiskey.length > 0 && allWhiskey.filter((element, index) => allWhiskey.indexOf(element) === index).map(item => 
                  <MenuItem key={item.country} value={item.country}>{item.country}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="drycker-container">
          {
            allWhiskey.length > 0 ?
            countryValue === 'All' ?
            allWhiskey.map(dryck => 
                  <Card props={dryck} key={dryck._id}/> 
              )
            :
            allWhiskey.filter(item => item.country === countryValue).map(item => 
              <Card props={item} key={item._id} />
              )
            :
            <h3>Laddar...</h3>
          }
      </div>
    </>
  )
}

// .filter((e, i, a) => a.indexOf(e) === i)

export default Whiskey