import React from 'react'
import styles from './Header.module.scss'

const Header = ({ title }) => {
  return (
    <div className={styles.wrapper}><i className='bx bx-left-arrow-alt'></i>{title}</div>
  )
}
export default Header