import React from 'react'
import styles from './Header.module.scss'

const Header = ({ title }) => {
  return (
    <div className={styles.wrapper}>{title}</div>
  )
}
export default Header