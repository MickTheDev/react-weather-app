import React, { useState, useEffect } from 'react'
import Header from './Header'
import Form from './Form'
import WeatherInfo from './WeatherInfo'
import styles from './Container.module.scss'
import { motion } from 'framer-motion'

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
    <motion.div
      className={styles.wrapper}
      initial={{ x: -180, rotate: -60, scale: 0, opacity: 0 }}
      animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
      }}
    >
      <Header
        title="Weather App"
        weatherStatus={weather.name}
        setWeather={setWeather}
        initial={{ x: -180, scale: 0, opacity: 0 }}
        animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
        exit={{ opacity: 0, x: -180, scale: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      />
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
    </motion.div>
  )
}
export default Container
