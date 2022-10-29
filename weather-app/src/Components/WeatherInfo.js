import React from 'react'
import styles from './WeatherInfo.module.scss'
import { motion } from "framer-motion";

const WeatherInfo = ({ weather }) => {
  const weatherId = weather.weather[0].id
  let weatherIcon

  if (weatherId === 800) {
    weatherIcon = 'clear.svg'
  } else if (weatherId >= 200 && weatherId <= 232) {
    weatherIcon = 'storm.svg'
  } else if (weatherId >= 600 && weatherId <= 622) {
    weatherIcon = 'snow.svg'
  } else if (weatherId >= 701 && weatherId <= 781) {
    weatherIcon = 'haze.svg'
  } else if (weatherId >= 801 && weatherId <= 804) {
    weatherIcon = 'cloud.svg'
  } else if (
    (weatherId >= 300 && weatherId <= 321) ||
    (weatherId >= 500 && weatherId <= 531)
  ) {
    weatherIcon = 'rain.svg'
  }

  return (
    <motion.div 
      className={styles.wrapper}
      initial={{ x: -180, rotate: -40, scale: 0, opacity: 0 }}
      animate={{ x: 0, rotate: 0, scale: 1, opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30
      }}
    >
      <img src={`./images/${weatherIcon}`} alt="weatherIcon" />
      <div className={styles.temp}>
        <span className={styles.numb}>{Math.round(weather.main.temp)}</span>
        <span className={styles.deg}>°</span>C
      </div>
      <div className={styles.weather}>{weather.weather[0].main}</div>
      <div className={styles.location}>
        <i className="bx bx-map"></i>
        <span>
          {weather.name}, {weather.sys.country}
        </span>
      </div>
      <div className={styles.bottom_details}>
        <div className={styles.feels}>
          <i className="bx bxs-thermometer"></i>
          <div className={styles.details}>
            <div className={styles.temp2}>
              <span className={styles.numb2}>
                {Math.round(weather.main.feels_like)}
              </span>
              <span className={styles.deg2}>°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div className={styles.humidity}>
          <i className="bx bxs-droplet-half"></i>
          <div className={styles.details}>
            <span className={styles.numb}>{weather.main.humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WeatherInfo
