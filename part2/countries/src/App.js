import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  //const api_key = process.env.REACT_APP_API_KEY
  const [ countries, setCountries ] = useState([])
  //const [ weather, setWeather ] = useState([])
  const [ filter, setFilter ] = useState('')

  const handleSearch = (event) => setFilter(event.target.value)

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase()
    .includes(filter.toLowerCase()))

  const sz = filteredCountries.length;

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => setCountries(response.data))
  }, [])
  
  /*const url = 'http://api.weatherstack.com/current?access_key=' + 
                api_key + '&query=Lagos' //+ countries[0].capital

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setWeather(response.data.current)
      console.log(response.data)
    })
    console.log(weather)
  }, [])*/

  return (
  <div>
    find countries 
    <input value={filter} onChange={handleSearch}/>
    <div>
      {
        filter === '' && countries.map(country =>
          <p key={country.name} >{country.name}</p>)
      }
      {
        sz === 1 && <Filter filteredCountry={filteredCountries[0]} />
      }
      {
        sz > 10 && <p>Too many matches, specify another filter</p>
      }
      {
        (sz <= 10 && sz !== 1) && filteredCountries.map(country =>
          <p key={country.name}>{country.name}<button onClick={()=> setFilter(country.name)}>show</button></p>
          )
      }
      
    </div>
  </div>)
}

const Filter = ({ filteredCountry }) => {
  const [ weather, setWeather ] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const url = 'http://api.weatherstack.com/current?access_key=' + 
                api_key + '&query=' + filteredCountry.capital
  //const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${filteredCountry.capital}`

  useEffect(() => {
    axios.get(url)
    /*axios
    .get('http://api.weatherstack.com/current', {
      params:{
        access_key: api_key,
        query: filteredCountry.capital
      }
    })*/
    .then(response =>setWeather(response.data.current))
  }, [])
  return (
    <div>
      <h1>{filteredCountry.name}</h1>

      <p>capital {filteredCountry.capital}</p>
      <p>population {filteredCountry.population}</p>
      <h3>Spoken languages</h3>
      <ul> 
        {filteredCountry.languages.map(lang =>
          <li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img src={filteredCountry.flag} width="100px" alt=""/>
      <p><b>Weather in {filteredCountry.capital}</b></p>

      <p><b>temperature:</b> {weather.temperature} Celcius </p>
      <img src={weather.weather_icons} width="50px" alt=""/>
      <p><b>wind: </b>{weather.wind_speed}mph direction {weather.wind_dir}</p>

    </div>
  )
}

export default App;
