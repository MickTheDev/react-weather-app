import React from 'react'
import Header from './Header'
import Form from './Form'
import styles from './Container.module.scss'


const Container = () => {
  return (
    <div className={styles.wrapper}>
        <Header title="Weather App"/>
        <Form />
    </div>
  )
}
export default Container