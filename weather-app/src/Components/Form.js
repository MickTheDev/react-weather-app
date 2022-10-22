import React from 'react'
import styles from './Form.module.scss'

const Form = () => {
  return (
    <form className={styles.wrapper}>
        <input 
          className={styles.textField}
          type="text" 
          name="textField" 
          placeholder='Enter city name'
          spellCheck="false"
          autoComplete="off"
          required

        />
        <div className={styles.separator}></div>
        <button className={styles.btn}>Get Device Location</button>
    </form>
  )
}

export default Form