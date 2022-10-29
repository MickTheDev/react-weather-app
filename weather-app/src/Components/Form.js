import React from 'react'
import ErrorMessage from './ErrorMessage'
import styles from './Form.module.scss'
import { motion } from "framer-motion";

const Form = ({ search, query, setQuery, searchByPos, weather }) => {
  
  return (
    
    <motion.form 
      className={styles.wrapper}
      onSubmit={(e) => e.preventDefault()}
      initial={{ x: -180, rotate: -40, scale: 0, opacity: 0 }}
      animate={{ x: 0, rotate: 0, scale: 1, opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30
      }}
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
    </motion.form>
  )
}

export default Form