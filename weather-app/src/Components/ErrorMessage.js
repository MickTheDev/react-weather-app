import React from 'react'
import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
  return (
    <div className={styles.error_wrapper}>City not found</div>
  )
}

export default ErrorMessage