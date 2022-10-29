import React from 'react'
import ErrorMessage from './ErrorMessage'
import styles from './Form.module.scss'

const Form = ({ search, query, setQuery, searchByPos, weather }) => {
  
  return (
    <form 
      className={styles.wrapper}
      onSubmit={(e) => e.preventDefault()}
    >

        {weather.message === "city not found" && <ErrorMessage />}

        <input 
          className={styles.textField}
          type="text" 
          name="textField" 
          placeholder='Enter city name'
          spellCheck="false"
          autoComplete="off"
          value={query}
          onKeyUp={(e) => search(e)}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <div className={styles.separator}></div>
        <button 
          type='button' 
          className={styles.btn}
          onClick={() => searchByPos()}
        >Get Device Location</button>
    </form>
  )
}

export default Form