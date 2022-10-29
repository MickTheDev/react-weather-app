import React, { useState, useEffect } from 'react'
import Header from './Header'
import Form from './Form'
import WeatherInfo from './WeatherInfo'
import styles from './Container.module.scss'

const Container = () => {
  const [lat, setLat] = useState()
  const [long, setLong] = useState()
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (e) => {
    if (e.code === 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery('')
        })
    }
  }
  const searchByPos = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })

    fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result)
      })
  }

  useEffect(() => {
    console.log(weather)
  }, [weather])

  return (
    <div className={styles.wrapper}>
      <Header title="Weather App" setWeather={setWeather} />
      {weather.cod !== 200 && (
        <Form
          search={search}
          query={query}
          setQuery={setQuery}
          searchByPos={searchByPos}
          weather={weather}
        />
      )}
      {weather.cod === 200 && <WeatherInfo weather={weather} />}
    </div>
  )
}
export default Container
