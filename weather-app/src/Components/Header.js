import React from 'react'
import styles from './Header.module.scss'
import { motion } from 'framer-motion'

const Header = ({ title, setWeather, weatherStatus }) => {
  return (
    <div 
      className={styles.wrapper}
    >
      {weatherStatus && (
        <motion.i
          initial={{ x: -180, scale: 0, opacity: 0 }}
          animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
          exit={{ opacity: 0, x: -180, scale: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="bx bx-left-arrow-alt"
          onClick={() => setWeather({})}
        ></motion.i>
      )}
      {title}
    </div>
  )
}
export default Header
